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

    pub fn is_outdated(&self) -> bool {
        if let Some(expire_at) = self.expire_at {
            let now = SystemTime::now();
            return now > expire_at
        }
        true
    }
}

#[cfg(test)]
mod acoustic_tests {
    use super::*;

    #[test]
    fn check_is_outdated_default() {
        let token: AccessToken = Default::default();
        assert_eq!(token.is_outdated(), true);
    }

    #[test]
    fn check_is_outdated() {
        let mut token: AccessToken = Default::default();
        token.expires_in = 10;
        token.recalc_expire_at();
        assert_eq!(token.is_outdated(), false);
    }
}
