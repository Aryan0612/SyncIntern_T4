import React, { useEffect, useRef } from "react";

const Preview = ({ htmlCode, cssCode, jsCode }) => {
  const previewRef = useRef(null);

  useEffect(() => {
    const { current: previewFrame } = previewRef;

    const code = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;

    previewFrame.srcdoc = code;
  }, [htmlCode, cssCode, jsCode]);

  return <iframe ref={previewRef} title="Preview" />;
};

export default Preview;
