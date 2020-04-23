import React from 'react';
import Editor from '../components/Editor';
import Preview from '../components/Preview';

import { EditorContextProvider } from '../contexts/EditorContext';

function App() {
  return (
    <div className="App">
      <EditorContextProvider>
        <Editor />
        <Preview />
      </EditorContextProvider>
    </div>
  );
}

export default App;
