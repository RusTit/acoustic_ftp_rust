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
    let export_option = ExportListType {
        list_id: 20718361,
        export_type: ExportTypeLiteral::All,
        export_format: ExportFormatLiteral::Csv,
        email: None,
        file_encoding: None,
        add_to_stored_files: None,
        date_start: None,
        date_end: None,
        use_created_date: None,
        include_lead_source: None,
        list_date_format: None,
        include_recipient_id: None,
        export_columns: None,
    };
    let export_model = GetExportFromDatabaseModel {
        export_list: vec![export_option],
    };
    debug!("Starting export task.");
    provider.run_export(&token, &export_model).await?;

    Ok(())
}
