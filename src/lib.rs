mod acoustic;
mod env_vars;
use acoustic::provider::AcousticProvider;
use log::{error, info};
use std::error::Error;

pub async fn run() -> Result<(), Box<dyn Error>> {
    let settings = env_vars::get_vars();
    let provider = AcousticProvider::new(&settings);
    let token = provider.get_access_key().await;
    match token {
        Ok(token) => info!("Token: {} is valid: {}", token.access_token, token.is_outdated()),
        Err(e) => error!("Error getting token: {:?}", e),
    }

    Ok(())
}
