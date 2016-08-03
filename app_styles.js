import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window"); 

const styles = StyleSheet.create({
// LOGIN AND SIGNUP
  bgImageContainer: {
    width: width,
    height: 270,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },

  bgImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    resizeMode: 'stretch'
  },
  
  bgImageIconContainer: {
    marginTop: 50,
    width: 120,
    height: 120
  },

  bgImageIcon: {
    flex: 1,
    width: null,
    height: null
  },
  mainContainer: {
    flex: 1,
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

  formInputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    height: height,
    width: width,
  },

  inputContainer: {
    alignItems: "center",
  },

  formInputWrapper: {
    borderColor: '#50514F',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0.5 
  },

  formInput: {
    width: width,
    height: 50,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#FA2D65'
  },

  formInputInlineWrapper: {
    flexDirection: 'row'
  },

  formInputInline: {
    width: .5 * width,
  },

  authButtonContainer: {
    width: width,
    height: 50,
    alignItems: 'center'
  },

  authButton: {
    marginTop: 20,
    width: .7 * width,
    height: 50,
    borderRadius: height / 2,
    backgroundColor: '#FA2D65',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18 
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 48,
  },

  footerButton: {
    height: 50,
    width: width,
    backgroundColor: '#FA2D65',
    alignItems: 'center',
    justifyContent: 'center'
  },
}); 

export default styles;