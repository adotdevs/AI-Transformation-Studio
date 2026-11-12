import { useState } from "react";
import { getEngineStatus } from "../services/engine";

export function Settings() {
  const [endpoint, setEndpoint] = useState("http://127.0.0.1:8000");
  const [status, setStatus] = useState("Not checked");
  const [checking, setChecking] = useState(false);

  async function checkStatus() {
    setChecking(true);
    try {
      const result = await getEngineStatus();
      setStatus(result.connected ? "Connected" : "Not connected");
    } catch {
      setStatus("Unavailable");
    } finally {
      setChecking(false);
    }
  }

  return (
    <section className="panel">
      <header className="panel-header">
        <h2>Settings</h2>
        <p>The local service address is kept on this screen only. Nothing is contacted.</p>
      </header>

      <div className="controls settings-controls">
        <label>
          Service address
          <input
            value={endpoint}
            spellCheck={false}
            onChange={(event) => setEndpoint(event.target.value)}
          />
        </label>
        <button type="button" onClick={checkStatus} disabled={checking}>
          {checking ? "Checking" : "Check status"}
        </button>
        <span className="status">{status}</span>
      </div>
    </section>
  );
}
