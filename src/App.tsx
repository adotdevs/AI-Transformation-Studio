import { useState } from "react";
import { Settings } from "./sections/Settings";
import { VideoStudio } from "./sections/VideoStudio";
import { VoiceStudio } from "./sections/VoiceStudio";
import "./App.css";

const sections = [
  { id: "video", label: "Video Studio" },
  { id: "voice", label: "Voice Studio" },
  { id: "settings", label: "Settings" },
] as const;

type SectionId = (typeof sections)[number]["id"];

function App() {
  const [section, setSection] = useState<SectionId>("video");

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <strong>AI Transformation Studio</strong>
          <span>Local desktop</span>
        </div>
        <nav className="nav" aria-label="Studios">
          {sections.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === section ? "nav-item active" : "nav-item"}
              aria-current={item.id === section ? "page" : undefined}
              onClick={() => setSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="content">
        {section === "video" && <VideoStudio />}
        {section === "voice" && <VoiceStudio />}
        {section === "settings" && <Settings />}
      </main>
    </div>
  );
}

export default App;
