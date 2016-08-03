import React, { Component } from 'react';

// Components
import AuthShared from '../auth_shared';

export default class Login extends Component {

  render() {
    return (
      <AuthShared login={true}/>
    );
  }
}