import React, { useContext, useState } from 'react';
import { EditorContext } from '../../contexts/EditorContext';

function Editor() {
  const { editor } = useContext(EditorContext);
  const [textAreaValue, setTextAreaValue] = useState('');

  function handleTextInput(event) {
    setTextAreaValue(event.target.value);
  }

  const isEmpty = 0;
  // eslint-disable-next-line eqeqeq
  if (textAreaValue.length == isEmpty) {
    setTextAreaValue(editor);
  }

  return (
    <div>
      <h1>Editor</h1>
      <textarea id="editor" onChange={handleTextInput} />
      <div></div>
    </div>
  );
}

export default Editor;
