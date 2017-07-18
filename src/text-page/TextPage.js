import React from 'react';
import {Link} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import Paper from '../_components/papers/Paper';


@inject('userNumber')
@observer
class TextPage extends React.PureComponent {
  render() {
    const {userNumber} = this.props;
    return <Paper className='login-page'>
      <div className='text-page__text'>Number: {userNumber.value}</div>
      <div className='text-page__text'>Number*2: {userNumber.dobuledValue}</div>
      <div className='text-page__text'>Square of number: {userNumber.squaredValue}</div>
      <Link to='/' className='button button_primary login-page__login-btn'>To main page</Link>
    </Paper>
  }
}

export default TextPage;
