import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import AppContainer from './containers/AppContainer';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
