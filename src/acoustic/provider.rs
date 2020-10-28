use crate::acoustic::models::{AccessToken, CommonXmlModel};
use crate::env_vars::AppVars;
use reqwest::{Client, StatusCode};
use std::error::Error;
use std::io::{Error as IoError, ErrorKind};

pub struct AcousticProvider<'a> {
    settings: &'a AppVars,
    client: Client,
}

impl<'a> AcousticProvider<'a> {
    pub fn new(settings: &'a AppVars) -> Self {
        Self {
            settings,
            client: reqwest::Client::new(),
        }
    }

    pub async fn run_export(
        &self,
        access_token: &AccessToken,
        data_model: &impl CommonXmlModel,
    ) -> Result<(), Box<dyn Error>> {
        let body_string = data_model.get_xml_model()?;
        let url = format!("{}/XMLAPI", self.settings.url_endpoint);
        let bearer = format!("Bearer {}", access_token.access_token);
        let res = self
            .client
            .post(&url)
            .header("Content-Type", "text/xml;charset=utf-8")
            .header("Authorization", bearer)
            .body(body_string)
            .send()
            .await;
        match res {
            Ok(r) => {
                if r.status() == StatusCode::OK {
                    return Ok(());
                }
            }
            Err(e) => return Err(Box::new(e)),
        }
        Err(Box::new(IoError::new(ErrorKind::Other, "Unknown")))
    }

    pub async fn get_access_key(&self) -> Result<AccessToken, Box<dyn Error>> {
        let url = format!("{}/oauth/token", self.settings.url_endpoint);
        let params = [
            ("grant_type", "refresh_token"),
            ("client_id", &self.settings.client_id),
            ("client_secret", &self.settings.client_secret),
            ("refresh_token", &self.settings.client_refresh_token),
        ];
        let res = self.client.post(&url).form(&params).send().await;
        match res {
            Ok(r) => {
                if r.status() == StatusCode::OK {
                    let data = r.json::<AccessToken>().await;
                    match data {
                        Ok(mut d) => {
                            d.recalc_expire_at();
                            if d.is_outdated() {
                                return Err(Box::new(IoError::new(
                                    ErrorKind::Other,
                                    "Toke is outdated already",
                                )));
                            }
                            return Ok(d);
                        }
                        Err(e) => return Err(Box::new(e)),
                    }
                }
            }
            Err(e) => return Err(Box::new(e)),
        }
        Err(Box::new(IoError::new(ErrorKind::Other, "Unknown")))
    }
}
