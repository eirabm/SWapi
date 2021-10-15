import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

import { BrowserRouter } from 'react-router-dom';

import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { swApi } from '@swapi/store'

import { Provider } from 'react-redux';

ReactDOM.render(
  <ApiProvider api={swApi}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ApiProvider>
  ,
  document.getElementById('root')
);
