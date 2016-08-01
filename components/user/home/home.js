import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  AlertIOS,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import firebaseApp from 'TextbookSwap/firebase_setup';

const { width, height } = Dimensions.get("window"); 
const auth = firebaseApp.auth();

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  logOutButton: {
    marginTop: 150, 
    backgroundColor: "#FF5964",
    borderRadius: 2,
    width: .8 * width,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },

  logOutButtonText: {
    color: "white",
    textAlign: "center"
  }
});



export default class Home extends Component {
  render() {
    let user = auth.currentUser;

    return (
      <View> 
        <View style={styles.homeContainer}>
          <TouchableOpacity style={styles.logOutButton} onPress={this._signUserOut}>
            <Text style={styles.logOutButtonText}>Log out: {user.email}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );


  }
  _signUserOut() {
    auth.signOut().then(() => {
      console.log("User signed out"); 
      Actions.login
    }, (error) => {
      AlertIOS.alert(
        `${error.code}`,
        `${error.message}`
      );
    });
  }
}