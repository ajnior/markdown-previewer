import React, { useState } from 'react';
import defaultMarkdown from './defaultValue';

const EditorContext = React.createContext('');

function EditorContextProvider(props) {
  const [editorValue, setEditorValue] = useState(defaultMarkdown);

  function handleUserInput(value) {
    setEditorValue(value);
  }

  const contextValue = {
    editorValue,
    handleUserInput,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      {props.children}
    </EditorContext.Provider>
  );
}

export { EditorContextProvider, EditorContext };
