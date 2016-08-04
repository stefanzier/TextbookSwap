import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import firebaseApp from './firebase_setup';

// Components
import Login from './components/user/login/login';
import TabBar from './components/user/tab_bar/tab_bar';
import Signup from './components/user/signup/signup';

// Switching scene type
import FirebaseSwitch from './firebase_switch';

const styles = StyleSheet.create({
  navBarDefault: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },

  homeNavigator: {
    backgroundColor: "#7790E6",
    borderBottomColor: 'transparent',
    borderBottomWidth: 65
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
      <Router navigationBarStyle={styles.navBarDefault} titleStyle={{ color: "white" }} barButtonIconStyle={{tintColor:'rgb(255,255,255)'}}>
        <Scene key="root" tabs={true} component={FirebaseSwitch} selector={rootSelector}>
          <Scene key="authScenes" hideNavBar={false}>
            <Scene key="login" component={Login} title="SCU TextbookSwap"/>
            <Scene key="signup" component={Signup} hideNavBar={false} title="Create an account!" />
          </Scene>
          <Scene key="appScenes" hideNavBar={false} >  
            <Scene key="home" component={TabBar} navigationBarStyle={styles.homeNavigator} titleStyle={{color: "white"}} title="TextbookSwap" initial={true} />
          </Scene>
        </Scene>
      </Router>
    );
  }
}


AppRegistry.registerComponent('TextbookSwap', () => TextbookSwap);
