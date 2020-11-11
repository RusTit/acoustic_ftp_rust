pub mod acoustic;
pub mod env_vars;
use acoustic::models::{
    ExportFormatLiteral, ExportListType, ExportTypeLiteral, GetExportFromDatabaseModel,
};
use acoustic::provider::AcousticProvider;
use log::debug;
use std::error::Error;

pub async fn run() -> Result<(), Box<dyn Error>> {
    let settings = env_vars::get_vars();
    let provider = AcousticProvider::new(&settings);
    let token = provider.get_access_key().await?;
    let mut export_option: ExportListType = Default::default();
    export_option.list_id = 20718361;
    export_option.export_type = ExportTypeLiteral::All;
    export_option.export_format = ExportFormatLiteral::Csv;
    let export_model = GetExportFromDatabaseModel {
        export_list: vec![export_option],
    };
    debug!("Starting export task.");
    provider.run_export(&token, &export_model).await?;

    Ok(())
}
