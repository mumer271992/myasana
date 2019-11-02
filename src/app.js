import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'bootstrap/scss/bootstrap.scss';
import Router from './router/Router';
import './firebase/firebase'; // Initialize firebase DB
import store from './store/configStore';

const jsx = (
  <Provider store={store}>
    <Router />
  </Provider>
);

// eslint-disable-next-line no-undef
ReactDOM.render(jsx, document.getElementById('app'));
