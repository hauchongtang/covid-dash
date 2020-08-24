import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import Routes from './Route';

ReactDOM.render(
  <HashRouter basename='/covid-dash/'>
    <Routes />
  </HashRouter>,
  document.getElementById('root')
);
