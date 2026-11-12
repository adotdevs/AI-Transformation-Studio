/// Status of the future local FastAPI service.
/// Nothing is started or contacted yet.
#[derive(serde::Serialize)]
pub struct EngineStatus {
    pub connected: bool,
    pub service: String,
}

#[tauri::command]
pub fn engine_status() -> EngineStatus {
    EngineStatus {
        connected: false,
        service: "http://127.0.0.1:8000".into(),
    }
}
