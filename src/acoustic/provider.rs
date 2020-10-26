use crate::acoustic::models::AccessToken;
use crate::env_vars::AppVars;
use reqwest::StatusCode;
use std::error::Error;
use std::io::{Error as IoError, ErrorKind};

pub struct AcousticProvider<'a> {
    settings: &'a AppVars,
}

impl<'a> AcousticProvider<'a> {
    pub fn new(settings: &'a AppVars) -> Self {
        Self { settings }
    }

    pub async fn get_access_key(&self) -> Result<AccessToken, Box<dyn Error>> {
        let url = format!("{}/oauth/token", self.settings.url_endpoint);
        let params = [
            ("grant_type", "refresh_token"),
            ("client_id", &self.settings.client_id),
            ("client_secret", &self.settings.client_secret),
            ("refresh_token", &self.settings.client_refresh_token),
        ];
        let client = reqwest::Client::new();
        let res = client.post(&url).form(&params).send().await;
        match res {
            Ok(r) => {
                if r.status() == StatusCode::OK {
                    let data = r.json::<AccessToken>().await;
                    match data {
                        Ok(mut d) => {
                            d.recalc_expire_at();
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
