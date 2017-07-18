import React from 'react';
import {Link} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import Paper from '../_components/papers/Paper';


@inject('userNumberStore')
@observer
class TextPage extends React.PureComponent {
  render() {
    const {userNumberStore} = this.props;
    return <Paper className='login-page'>
      <div className='text-page__text'>Number: {userNumberStore.value}</div>
      <div className='text-page__text'>Number*2: {userNumberStore.dobuledValue}</div>
      <div className='text-page__text'>Square of number: {userNumberStore.squaredValue}</div>
      <Link to='/' className='button button_primary login-page__login-btn'>To main page</Link>
    </Paper>
  }
}

export default TextPage;
