import React from 'react';
import Editor from '../components/Editor';
import Preview from '../components/Preview';

import { EditorContextProvider } from '../contexts/EditorContext';

import '../styles/_normalize.css';
import '../styles/_base.css';

import { Wrapper } from './styles';

function App() {
  return (
    <Wrapper className="App">
      <EditorContextProvider>
        <Editor />
        <Preview />
      </EditorContextProvider>
    </Wrapper>
  );
}

export default App;
