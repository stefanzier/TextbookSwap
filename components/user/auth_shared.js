import React, { Component } from 'react';
import {
  AlertIOS,
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
import { Actions } from 'react-native-router-flux';

import firebaseApp from 'TextbookSwap/firebase_setup';
import styles from 'TextbookSwap/app_styles';

// Components
import HeaderImage from './header_image';
import Loading from './loading.js';

// For Firebase Auth
const auth = firebaseApp.auth();

export default class Login extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isLoading: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  componentDidMount() {
    let user = auth.currentUser;
    if (user) {
      console.log(msg)
      Actions.home
    } else {
      return;
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Loading loadingText="Loading..." />
    } else {
      return (
        <View style={styles.mainContainer}>
          <KeyboardAwareScrollView 
            style={styles.scrollView}
            keyboardShouldPersistTaps={false}
            automaticallyAdjustContentInsets={true}
            alwaysBonceVertical={false}
          >
            <View style={styles.formInputContainer}>
              <HeaderImage />
              {this.props.login ? this.renderLogin() : this.renderSignup()}
            </View>

            {this.props.login ? this.renderFooter() : null}

          </KeyboardAwareScrollView>
        </View>
      );
    }
  }

  renderLogin() {
    return (
      <View>
        {this.renderEmailAndPasswordForms()}
        <View style={styles.authButtonContainer}>
          <TouchableOpacity
            style={styles.authButton}
            onPress={this._logInUser.bind(this)}
          >
            <Text style={styles.actionText}>Log me in!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderSignup() {
    return (
      <View>
        <View style={[styles.formInputWrapper, styles.formInputInlineWrapper]}>
          <View style={{borderColor: '#50514F', borderLeftWidth: 0, borderRightWidth: 0.5, borderTopWidth: 0, borderBottomWidth: 0}}>
            <TextInput
              style={[styles.formInput, styles.formInputInline]}
              autoFocus={true}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="First Name"
              onChangeText={(firstName) => this.setState({firstName})}
            />
          </View>

          <TextInput
            style={[styles.formInput, styles.formInputInline]}
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Last Name"
            onChangeText={(lastName) => this.setState({lastName})}
          />
        </View>
        {this.renderEmailAndPasswordForms()}

        <View style={styles.formInputWrapper}>
          <TextInput
            style={styles.formInput}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password Confirmation"
            onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
          />
        </View>

        <View style={styles.authButtonContainer}>
          <TouchableOpacity
            style={styles.authButton}
            onPress={this._signUpUser.bind(this)}
          >
            <Text style={styles.actionText}>Sign me up!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderEmailAndPasswordForms() {
    return (
      <View>
        <View style={styles.formInputWrapper}>
          <TextInput
            style={styles.formInput}
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            onChangeText={(email) => this.setState({email})}
          />
        </View>

        <View style={styles.formInputWrapper}>
          <TextInput
            style={styles.formInput}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            onChangeText={(password) => this.setState({password})}
          />
        </View>

      </View>
    );
  }

  renderFooter() {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={Actions.signup}
        >
          <Text style={styles.actionText}>No account? Create one!</Text> 
        </TouchableOpacity>
      </View>
    );
  }
  
  _logInUser() {
    let { isLoading, email, password } = this.state;
    if (!email || !password) {
      AlertIOS.alert('Uh oh!', 'Please fill out all fields');
    } else {
      this.setState({isLoading: true});
      auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({isLoading: false});
          Actions.home;
        })
        .catch((error) => {
          this.setState({isLoading: false});
          switch(error.code) {
            case "auth/wrong-password":
              AlertIOS.alert('Uh oh!', 'Invalid password! Please try again.');
            break;

            case "auth/invalid-email":
              AlertIOS.alert('Uh oh!', 'Invalid email! Please try again.'); 
            break;

            case "auth/user-not-found":
              AlertIOS.alert('Uh oh!', 'Please check your credentials and try again');
            break;
          }
        });
      }
  }

  _signUpUser() {
    let { isLoading, firstName, lastName, email, password, passwordConfirmation } = this.state;
    // Check that email, password, and passwordConfirmation are present
    if (!firstName || !lastName || !email || !password || !passwordConfirmation) { 
      AlertIOS.alert('Uh oh!', 'Please fill out all fields'); 
    
    } else if (password == passwordConfirmation) {
      this.setState({isLoading: true});
      auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
          user.updateProfile({
            displayName: `${firstName} ${lastName}`
          })
          .then(() => {
            this.setState({isLoading: false});
            Actions.home;
          })
          .catch((error) => {
            this.setState({isLoading: false});
            AlertIOS.alert(`${error.code}`, `${error.message}`);
          });
        })
        .catch((error) => {
          this.setState({isLoading: false});
          AlertIOS.alert(`${error.code}`, `${error.message}`);
        });

    } else {
      AlertIOS.alert('Uh oh!', 'Passwords do not match');
    }
  }
}