import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import StartPage from './start-page/StartPage';
import TextPage from './text-page/TextPage';


export default class Routes extends Component {
  render() {
    return <div>
      <Route exact path='/' component={StartPage}/>
      <Route exact path='/text' component={TextPage}/>
    </div>
  }
}
