use serde::Deserialize;
use std::ops::Add;
use std::time::{Duration, SystemTime};

#[derive(Deserialize, Debug)]
pub struct AccessToken {
    pub access_token: String,
    pub token_type: String,
    pub refresh_token: String,
    pub expires_in: u32,
    pub expire_at: SystemTime,
}

impl AccessToken {
    pub fn new() -> AccessToken {
        Self {
            access_token: String::new(),
            token_type: String::new(),
            refresh_token: String::new(),
            expires_in: 0,
            expire_at: SystemTime::now(),
        }
    }

    pub fn recalc_expire_at(&mut self) {
        let now = SystemTime::now();
        let duration = Duration::from_secs(self.expires_in.into());
        self.expire_at = now.add(duration);
    }
}

impl Default for AccessToken {
    fn default() -> Self {
        Self::new()
    }
}
