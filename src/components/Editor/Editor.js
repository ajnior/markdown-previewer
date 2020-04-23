import React, { useContext, useState } from 'react';
import { EditorContext } from '../../contexts/EditorContext';

function Editor() {
  const { editorValue, handleUserInput } = useContext(EditorContext);

  return (
    <div>
      <h1>Markdown Editor</h1>
      <textarea
        id="editor"
        defaultValue={editorValue}
        onChange={(e) => handleUserInput(e.target.value)}
      />
      <div></div>
    </div>
  );
}

export default Editor;
