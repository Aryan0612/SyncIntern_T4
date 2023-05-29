import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const Editor = ({ language, code, onChange }) => {
  const handleCodeChange = (newCode) => {
    onChange(newCode);
  };

  return (
    <AceEditor
      mode={language}
      theme="monokai"
      value={code}
      onChange={handleCodeChange}
      height="300px"
      width="100%"
      editorProps={{ $blockScrolling: true }}
    />
  );
};

export default Editor;
