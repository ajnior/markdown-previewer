import React, { useContext } from 'react';
import Marked from 'marked';
import ReactHtmlParser from 'react-html-parser';
import { EditorContext } from '../../contexts/EditorContext';

import EditorHeader from '../EditorHeader';

import { Wrapper } from './styled';

function Preview() {
  const { editorValue } = useContext(EditorContext);

  const parsedMarkdown = Marked(editorValue);

  return (
    <Wrapper className="preview preview-wrapper">
      <EditorHeader title="Preview" />
      <div id="preview">{ReactHtmlParser(parsedMarkdown)}</div>
    </Wrapper>
  );
}

export default Preview;
