import { createContext } from 'react';

const defaultState = {
  editor: 'hey hey hey',
  html: '<h1>Default Value</h1>',
};

const EditorContext = createContext(defaultState);

export { EditorContext };
