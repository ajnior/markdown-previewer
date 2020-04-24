import React, { useContext } from 'react';
import { EditorContext } from '../../contexts/EditorContext';

import EditorHeader from '../EditorHeader/EditorHeader';

import { Wrapper, TextArea } from './styles';

function Editor() {
  const { editorValue, handleUserInput } = useContext(EditorContext);

  return (
    <Wrapper className="editor">
      <EditorHeader title="Markdown" />
      <TextArea
        id="editor"
        defaultValue={editorValue}
        onChange={(e) => handleUserInput(e.target.value)}
      />
    </Wrapper>
  );
}

export default Editor;
