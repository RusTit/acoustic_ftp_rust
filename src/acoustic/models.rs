use serde::Deserialize;
use std::ops::Add;
use std::time::{Duration, SystemTime};

#[derive(Deserialize, Debug, Default)]
pub struct AccessToken {
    pub access_token: String,
    pub token_type: String,
    pub refresh_token: String,
    pub expires_in: u32,
    pub expire_at: Option<SystemTime>,
}

impl AccessToken {
    pub fn recalc_expire_at(&mut self) {
        let now = SystemTime::now();
        let duration = Duration::from_secs(self.expires_in.into());
        self.expire_at = Some(now.add(duration));
    }
}
