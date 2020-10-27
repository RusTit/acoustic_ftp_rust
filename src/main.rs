use acoustic_ftp_rust::run;
use log::info;

#[tokio::main]
async fn main() {
    env_logger::init();
    info!("App is started");
    run().await.unwrap();
    info!("App is finished");
}
