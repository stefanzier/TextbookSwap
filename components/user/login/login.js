import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Set width and height to screen dimensions
const { width, height } = Dimensions.get("window"); 

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#35A7FF"
  },

  scrollView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    overflow: "visible"
  },

  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 50,
    textAlign: "center"
  },

  loginContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    height: height,
    width: width,
  },

  loginImage: {
    width: 60,
    height: 80,
    marginTop: 50,
    marginBottom: 50
  },

  inputContainer: {
    alignItems: "center",
  },

  formInput: {
    height: 40,
    backgroundColor: "white",
    marginTop: 10,
    width: .8*width,
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 20
  },

  loginButton: {
    width: .8 * width,
    height: 40,
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF5964"
  },

  loginButtonText: {
    textAlign: "center",
    color: "white"
  },

  toSignupButton: {
    marginTop: 10,
    color: "white"
  },

  footer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 48,
      paddingVertical: 6,
      paddingLeft: 10,
    },

  footerText: {
    textAlign: "left",
    color: "white",
    fontSize: 14
  },

  footerActionText: {
    fontWeight: "700"
  }
}); 

export default class Login extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <KeyboardAwareScrollView 
          style={styles.scrollView}
          keyboardShouldPersistTaps={false}
          automaticallyAdjustContentInsets={true}
          alwaysBonceVertical={false}
        >
          <View style={styles.loginContainer}>
            <Image 
              source={require('TextbookSwap/assets/textbook.png')}
              style={styles.loginImage} 
            />
            <Text style={styles.headerText}>SCU TextbookSwap</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.formInput}
                placeholder="Email"
              />
              <TextInput
                style={styles.formInput}
                secureTextEntry={true}
                placeholder="Password"
              />
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.toSignupButton}>Dont have an account? Create one!</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              By signing up, I agree to TextbookSwap's <Text style={styles.footerActionText}>Terms of Service</Text> and <Text style={styles.footerActionText}>Privacy Policy</Text>.
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}