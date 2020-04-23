import React, { useContext } from 'react';
import Marked from 'marked';
import ReactHtmlParser from 'react-html-parser';
import { EditorContext } from '../../contexts/EditorContext';

function Preview({ html: htmlString }) {
  const { html } = useContext(EditorContext);

  const htmlToBeParsed = Marked(html);

  return (
    <div id="preview">
      <div>{ReactHtmlParser(htmlToBeParsed)}</div>
    </div>
  );
}

export default Preview;
