import React, { Component } from 'react';
import { Switch } from 'react-native-router-flux';

import firebaseApp from './firebase_setup';

export default class FirebaseSwitch extends Component {
  state = {
    loggedIn: false
  }

  componentWillMount() {
    firebaseApp.auth().onAuthStateChanged((user) => 
      this.setState({ loggedIn: !!user })
    );
  }

  render() {
    return(
      <Switch loggedIn={this.state.loggedIn} {...this.props} />
    );
  }
}