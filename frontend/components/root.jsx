import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
      <div className="search-bar">Search Bar Placeholder</div>
    </HashRouter>
  </Provider>
);

export default Root;
