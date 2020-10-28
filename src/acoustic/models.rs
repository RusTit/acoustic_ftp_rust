use quick_xml::se::to_string;
use serde::{Deserialize, Serialize};
use std::error::Error;
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
            return now > expire_at;
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

#[derive(Serialize, Deserialize, Debug, PartialEq)]
pub enum ExportTypeLiteral {
    #[serde(rename = "ALL")]
    All,
    #[serde(rename = "OPT_IN")]
    OptIn,
    #[serde(rename = "OPT_OUT")]
    OptOut,
    #[serde(rename = "UNDELIVERABLE")]
    Undeliverable,
}

impl Default for ExportTypeLiteral {
    fn default() -> Self {
        Self::All
    }
}

#[cfg(test)]
mod export_type_literal_tests {
    use super::*;

    #[test]
    fn check_default_value() {
        let value: ExportTypeLiteral = Default::default();
        assert_eq!(value, ExportTypeLiteral::All);
    }
}

#[derive(Serialize, Deserialize, Debug, PartialEq)]
pub enum ExportFormatLiteral {
    #[serde(rename = "CSV")]
    Csv,
    #[serde(rename = "TAB")]
    Tab,
    #[serde(rename = "PIPE")]
    Pipe,
}

impl Default for ExportFormatLiteral {
    fn default() -> Self {
        Self::Csv
    }
}

#[cfg(test)]
mod export_format_literal_tests {
    use super::*;

    #[test]
    fn check_default_value() {
        let value: ExportFormatLiteral = Default::default();
        assert_eq!(value, ExportFormatLiteral::Csv);
    }
}

#[derive(Serialize, Deserialize, Debug, PartialEq)]
pub enum ExportFileEncodingLiteral {
    #[serde(rename = "utf-8")]
    Utf8,
    #[serde(rename = "iso-8859-1")]
    Iso8859_1,
}

impl Default for ExportFileEncodingLiteral {
    fn default() -> Self {
        Self::Utf8
    }
}

#[cfg(test)]
mod export_file_encoding_literal_tests {
    use super::*;

    #[test]
    fn check_default_value() {
        let value: ExportFileEncodingLiteral = Default::default();
        assert_eq!(value, ExportFileEncodingLiteral::Utf8);
    }
}

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct Column {
    #[serde(rename = "COLUMN")]
    pub column: String,
}

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct ExportListType {
    #[serde(rename = "LIST_ID")]
    pub list_id: u32,
    #[serde(rename = "EXPORT_TYPE")]
    pub export_type: ExportTypeLiteral,
    #[serde(rename = "EXPORT_FORMAT")]
    pub export_format: ExportFormatLiteral,
    #[serde(rename = "EMAIL")]
    pub email: Option<String>,
    #[serde(rename = "FILE_ENCODING")]
    pub file_encoding: Option<ExportFileEncodingLiteral>,
    #[serde(rename = "ADD_TO_STORED_FILES")]
    pub add_to_stored_files: Option<String>,
    #[serde(rename = "DATE_START")]
    pub date_start: Option<String>,
    #[serde(rename = "DATE_END")]
    pub date_end: Option<String>,
    #[serde(rename = "USE_CREATED_DATE")]
    pub use_created_date: Option<String>,
    #[serde(rename = "INCLUDE_LEAD_SOURCE")]
    pub include_lead_source: Option<String>,
    #[serde(rename = "LIST_DATE_FORMAT")]
    pub list_date_format: Option<String>,
    #[serde(rename = "INCLUDE_RECIPIENT_ID")]
    pub include_recipient_id: Option<String>,
    #[serde(rename = "EXPORT_COLUMNS")]
    pub export_columns: Option<Vec<Column>>,
}

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct GetExportFromDatabaseModel {
    #[serde(rename = "ExportList")]
    pub export_list: Vec<ExportListType>,
}

pub trait CommonXmlModel {
    fn get_xml_model(&self) -> Result<String, Box<dyn Error>>;
}

impl CommonXmlModel for GetExportFromDatabaseModel {
    fn get_xml_model(&self) -> Result<String, Box<dyn Error>> {
        let data = to_string(&self);
        match data {
            Ok(s) => Ok(s),
            Err(e) => Err(Box::new(e)),
        }
    }
}
