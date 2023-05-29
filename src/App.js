import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const srcDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <div className="code-editor">
      <div className="code-editor__inputs">
        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          placeholder="HTML"
        />
        <textarea
          value={css}
          onChange={(e) => setCss(e.target.value)}
          placeholder="CSS"
        />
        <textarea
          value={js}
          onChange={(e) => setJs(e.target.value)}
          placeholder="JavaScript"
        />
      </div>
      <div className="code-editor__preview">
        <iframe
          srcDoc={srcDoc}
          title="preview"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default App;

/*
const button = document.getElementById("a");
button.addEventListener("click", function() {
button.style.backgroundColor = "yellow";
    });
*/
