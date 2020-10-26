pub mod provider {
    use crate::env_vars::env_vars::AppVars;

    pub struct AcousticProvider<'a> {
        settings: &'a AppVars,
    }

    impl<'a> AcousticProvider<'a> {
        fn new(settings: &'a AppVars) -> Self {
            Self { settings }
        }
    }
}
