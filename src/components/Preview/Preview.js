import React, { useContext } from 'react';
import Marked from 'marked';
import ReactHtmlParser from 'react-html-parser';
import { EditorContext } from '../../contexts/EditorContext';

function Preview() {
  const { editorValue } = useContext(EditorContext);

  const parsedMarkdown = Marked(editorValue);

  return (
    <div>
      <h1>Preview</h1>
      <div id="preview">{ReactHtmlParser(parsedMarkdown)}</div>
    </div>
  );
}

export default Preview;
