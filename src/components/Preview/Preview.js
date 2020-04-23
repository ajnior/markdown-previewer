import React, { useContext } from 'react';
import Marked from 'marked';
import ReactHtmlParser from 'react-html-parser';
import { EditorContext } from '../../contexts/EditorContext';

function Preview() {
  const { editorValue } = useContext(EditorContext);

  const parsedMarkdown = Marked(editorValue);

  return (
    <div id="preview">
      <h1>Preview</h1>
      <div>{ReactHtmlParser(parsedMarkdown)}</div>
    </div>
  );
}

export default Preview;
