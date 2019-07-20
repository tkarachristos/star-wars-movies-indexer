import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import initializeStore from './redux/store';

const store = initializeStore();

function Hi() {
  return <p>Hi.</p>;
}

render(
  <Provider store={store}>
    <Hi />
  </Provider>, 
  document.getElementById("app")
);
