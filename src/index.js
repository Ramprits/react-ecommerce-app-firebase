import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import DirectoryProvider from './context/directory.context';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HashRouter>
        <DirectoryProvider>
          <App />
        </DirectoryProvider>
      </HashRouter>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
