import { useState } from "react";

const sources = ["File", "Camera", "Screen"] as const;

export function VideoStudio() {
  const [source, setSource] = useState<(typeof sources)[number]>("File");
  const [running, setRunning] = useState(false);

  return (
    <section className="panel">
      <header className="panel-header">
        <h2>Video Studio</h2>
        <p>Choose a source. Preview and transforms stay off until an engine is connected.</p>
      </header>

      <div className="stage" role="img" aria-label="Video preview placeholder">
        Preview will appear here
      </div>

      <div className="controls">
        <label>
          Source
          <select
            value={source}
            onChange={(event) =>
              setSource(event.target.value as (typeof sources)[number])
            }
          >
            {sources.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={() => setRunning((value) => !value)}>
          {running ? "Stop" : "Start"}
        </button>
        <span className="status">{running ? "Standby" : "Idle"}</span>
      </div>
    </section>
  );
}
