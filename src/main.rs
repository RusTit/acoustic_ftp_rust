use acoustic_ftp_rust::run;
use env_logger;
use log::info;
use std::error::Error;

#[tokio::main]
pub async fn main() -> Result<(), Box<dyn Error>> {
    env_logger::init();
    info!("App is started");
    run().await?;
    info!("App is finished");
    Ok(())
}
