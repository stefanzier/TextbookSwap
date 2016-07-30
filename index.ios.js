import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Components
import Login from './components/user/login/login';

class TextbookSwap extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" hideNavBar={true}/>
        </Scene>
      </Router>
    );
  }
}


AppRegistry.registerComponent('TextbookSwap', () => TextbookSwap);
