import React from 'react';

import { Wrapper } from './styles';

function EditorHeader({ title }) {
  return (
    <Wrapper className="editor-header">
      <h1 className="editor-header__h1">{title}</h1>
    </Wrapper>
  );
}

export default EditorHeader;
