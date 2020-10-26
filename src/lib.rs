mod acoustic;
mod env_vars;
use acoustic::provider::AcousticProvider;
use log::info;
use std::error::Error;

pub async fn run() -> Result<(), Box<dyn Error>> {
    let settings = env_vars::get_vars();
    let provider = AcousticProvider::new(&settings);
    let token = provider.getAccessKey().await;
    info!("Token: {:?}", token);

    Ok(())
}
