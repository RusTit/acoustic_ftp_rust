use crate::env_vars::AppVars;
use crate::acoustic::models::{AccessToken};
use reqwest;
use reqwest::{Error, StatusCode};

pub struct AcousticProvider<'a> {
    settings: &'a AppVars,
}

impl<'a> AcousticProvider<'a> {
    pub fn new(settings: &'a AppVars) -> Self {
        Self { settings }
    }

    pub async fn getAccessKey(&self) -> Result<(), Error> {
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
                        Ok(d) => { d.access_token = ""; },
                        Err(e) => {},
                    }
                }
            },
            Err(e) => return Err(e),
        }
        Ok(())
    }
}
