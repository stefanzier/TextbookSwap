import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Router, { Scene } from 'react-native-router-flux';

class TextbookSwap extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          // scenes for main app go here 
        </Scene>
      </Router> 
    );
  }
}

AppRegistry.registerComponent('TextbookSwap', () => TextbookSwap);
