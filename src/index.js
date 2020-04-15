import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

// import redux and react-redux dependencies
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const defaultPitchers = ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'];
const defaultCatchers = ['Roy Campanella', 'Elston Howard', 'Kenji Jojima']

// create individual reducers
const pitchersList = (state = defaultPitchers, action) => {
  return state;
};

const catchersList = (state = defaultCatchers, action) => {
  return state;
};

// configure our redux store
const storeInstance = createStore(
  combineReducers({
    pitchersList,
    catchersList,
  })
);

// provide redux store access to our App
ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
