use serde::Deserialize;

#[derive(Deserialize)]
pub struct AccessToken {
    pub access_token: String,
    pub token_type: String,
    pub refresh_token: String,
    pub expires_in: u32,
}