import { useState } from "react";
import "./App.css";
import Resume_Editor from "./components/Resume_Editor";
import Resume_Preview from "./components/Resume_Preview";

function App() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [about, setAbout] = useState("");

    return (
        <div className="app">
            <h1>Live Resume Editor</h1>

            <div className="resume-container">
                <div className="editor-section">
                    <Resume_Editor
                        setName={setName}
                        setRole={setRole}
                        setAbout={setAbout}
                    />
                </div>

                <div className="preview-section">
                    <Resume_Preview
                        name={name}
                        role={role}
                        about={about}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;