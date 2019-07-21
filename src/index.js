import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import './index.css';

import initializeStore from './redux/store';

const store = initializeStore();

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("app")
);
