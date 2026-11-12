import { useState } from "react";

const inputs = ["Microphone", "System audio"] as const;

export function VoiceStudio() {
  const [input, setInput] = useState<(typeof inputs)[number]>("Microphone");
  const [armed, setArmed] = useState(false);

  return (
    <section className="panel">
      <header className="panel-header">
        <h2>Voice Studio</h2>
        <p>Choose an input. Recording and voice transforms are not available yet.</p>
      </header>

      <div className="meter" aria-hidden="true">
        <span />
      </div>

      <div className="controls">
        <label>
          Input
          <select
            value={input}
            onChange={(event) =>
              setInput(event.target.value as (typeof inputs)[number])
            }
          >
            {inputs.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={() => setArmed((value) => !value)}>
          {armed ? "Disarm" : "Arm"}
        </button>
        <span className="status">{armed ? "Armed locally" : "Idle"}</span>
      </div>
    </section>
  );
}
