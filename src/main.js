import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'mobx-react';
import Routes from './routes';
import * as stores from './stores';


ReactDOM.render(
  <Provider {...stores}>
    <Router>
      <Routes/>
    </Router>
  </Provider>,
  document.querySelector('.app')
);
