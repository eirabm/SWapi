import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

import { BrowserRouter } from 'react-router-dom';

import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { swApi } from '@swapi/store'

import { Provider } from 'react-redux';
import { store } from '@swapi/store'

ReactDOM.render(
  <Provider store={store}>
    <ApiProvider api={swApi}>
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    </ApiProvider>
  </Provider>,
  document.getElementById('root')
);
