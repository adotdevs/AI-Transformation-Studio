mod engine;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![engine::engine_status])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
