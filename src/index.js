import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

// import redux and react-redux dependencies
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// create individual reducers
const baseball = (state, action) => {
  return state;
};

// configure our redux store
const storeInstance = createStore(
  combineReducers({
    baseball
  })
);

// provide redux store access to our App
ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
