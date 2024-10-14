import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import './IDE.css';

const LlamaIDE = () => {
    const [code, setCode] = useState(''); // Store the user's code
    const [language, setLanguage] = useState('javascript'); // Store the selected language
    const [loading, setLoading] = useState(false);

    // Handle the code change in the editor
    const handleEditorChange = (value) => {
        setCode(value);
    };

    // Handle the language change from the dropdown
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        setCode(''); // Clear the code when language changes
    };

    // Handle the code submission to LLaMA 3
    const handleSubmitCode = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/groq-debug', {
                code,
                language,
            });

            // Update the code in the editor with the debugged code (including comments explaining changes)
            setCode(response.data.debuggedCode); // Replace the code with the debugged version and comments

        } catch (error) {
            setCode(`Error: ${error.message}`); // Handle any error by displaying in the editor
        }
        setLoading(false);
    };

    return (
        <div className="ide-container">
            <div className="editor-section">
                
                <label htmlFor="language-selector" className="language-label">Select Language:</label>
                <select id="language-selector" value={language} onChange={handleLanguageChange} className="language-select">
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="typescript">TypeScript</option>
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="php">PHP</option>
                    <option value="go">Go</option>
                    <option value="ruby">Ruby</option>
                    <option value="rust">Rust</option>
                    <option value="csharp">C#</option>
                </select>

                <Editor
                    height="60vh"
                    theme="vs-dark"
                    language={language} // Set the language for Monaco Editor
                    value={code} // Display the code in the editor
                    onChange={handleEditorChange}
                    options={{ fontSize: 14, minimap: { enabled: false }, wordWrap: 'on' }}
                />

                <button onClick={handleSubmitCode} className="submit-button" disabled={loading}>
                    {loading ? 'Analyzing...' : 'Submit Code'}
                </button>
            </div>
        </div>
    );
};

export default LlamaIDE;

