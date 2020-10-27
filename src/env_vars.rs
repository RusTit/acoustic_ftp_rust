use dotenv::{dotenv, Error as DotEnvError};
use log::{debug, warn};
use std::env;
use std::io::ErrorKind;

pub struct AppVars {
    pub client_id: String,
    pub client_secret: String,
    pub client_refresh_token: String,
    pub url_endpoint: String,
}

pub fn dotenv_proxy() {
    match dotenv() {
        Ok(env_file_path) => debug!("Env file was processed: {:?}", env_file_path),
        Err(e) => match e {
            DotEnvError::Io(io_error) => match io_error.kind() {
                ErrorKind::NotFound => debug!("The .env file is missing. Skipping."),
                _ => warn!("Unexpected io error while processing .env file"),
            },
            _ => warn!("Unexpected error while processing .env file"),
        },
    }
}

fn get_var_or_panic(key: &str) -> String {
    match env::var(key) {
        Ok(val) => val,
        Err(e) => panic!("Error getting key ({}): {}", key, e),
    }
}

pub fn get_vars() -> AppVars {
    dotenv_proxy();

    AppVars {
        client_id: get_var_or_panic("CLIENT_ID"),
        client_refresh_token: get_var_or_panic("CLIENT_REFRESH_TOKEN"),
        client_secret: get_var_or_panic("CLIENT_SECRET"),
        url_endpoint: get_var_or_panic("URL_ENDPOINT"),
    }
}
