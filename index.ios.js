import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import firebaseApp from './firebase_setup';

// Components
import Login from './components/user/login/login';
import Home from './components/user/home/home';

// Switching scene type
import FirebaseSwitch from './firebase_switch';

const styles = StyleSheet.create({
  navBarDefault: {
    backgroundColor: "#35A7FF",
  }
});

class TextbookSwap extends Component {
  state = {
    loggedIn: false
  }

  componentWillMount() {
    firebaseApp.auth().onAuthStateChanged((user) => 
      this.setState({ loggedIn: !!user })
    );
  }


  render() {
    const rootSelector = () => this.state.loggedIn ? 'appScenes' : 'authScenes';
    return (
      <Router>
        <Scene key="root" tabs={true} component={FirebaseSwitch} selector={rootSelector}>
          <Scene key="authScenes" hideNavBar={true}>
            <Scene key="login" component={Login} initial={true}/>
          </Scene>
          <Scene key="appScenes" hideNavBar={false} navigationBarStyle={styles.navBarDefault} titleStyle={{ color: "white" }}>
            <Scene key="home" component={Home} title="TextbookSwap" />
          </Scene>
        </Scene>
      </Router>
    );
  }
}


AppRegistry.registerComponent('TextbookSwap', () => TextbookSwap);
