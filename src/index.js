import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import initializeStore from './redux/store';
import App from './components/App';
import './index.css';

const store = initializeStore();

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("app")
);
