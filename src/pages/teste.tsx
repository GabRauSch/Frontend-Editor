import React, { useState } from 'react';
import { createRoot } from "react-dom/client";
import MonacoEditor from 'react-monaco-editor';

export const VAGINA = ()=> {
  const [code, setCode] = useState('');
  const editorDidMount = (editor: any, monaco: any) => {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  const onChange = (newValue: string, e: any) => {
    console.log('onChange', newValue, e);
  }

  const options = {
    selectOnLineNumbers: true
  }

    return (
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
    );
}