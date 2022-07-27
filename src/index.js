import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Store/Store.js';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>


      <BrowserRouter history={history} >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
