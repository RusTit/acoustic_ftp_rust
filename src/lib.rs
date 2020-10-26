mod acoustic;
mod env_vars;
use std::error::Error;

pub async fn run() -> Result<(), Box<dyn Error>> {
    let result = env_vars::env_vars::get_vars();
    Ok(())
}
