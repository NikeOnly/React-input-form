import React from 'react';
import {Link} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import Input from './../_components/inputs/Input';
import Paper from './../_components/papers/Paper';


@inject('userNumberStore')
@observer
class StartPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.userNumberStore.value = e.target.value;
  }

  render() {
    const {userNumberStore} = this.props;
    return <Paper className='login-page'>
      <Input className='input login-page__input'
        placeholder='Type a number'
        onChange={this.handleInputChange}
        value={userNumberStore.value}
        type='number'
      />
      <Link to='/text' className='button button_primary login-page__login-btn'>To text page</Link>
    </Paper>
  }
}

export default StartPage;
