import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'mobx-react';
import Routes from './routes';
import {userNumberStore} from './stores/userNumberStore.js'


ReactDOM.render(
  <Provider userNumber={userNumberStore}>
    <Router>
      <Routes/>
    </Router>
  </Provider>,
  document.querySelector('.app')
);
