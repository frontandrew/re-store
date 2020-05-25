import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import reduser from './redusers';

import App from './components/app';

const store = createStore(reduser);

store.subscribe(() => {
  console.log(store.getState());
});

console.log('Hello ReStore')
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.root')
);



