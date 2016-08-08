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

  // LOADING
  loadingBG: {
    backgroundColor: '#7790E6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  loadingText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10
  },

  // BUY TAB
  // BOOK LIST
  bookListContainer: {
    width: width,
  },

  // Book
  bookContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: '#50514F',
    borderTopWidth: 0,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0,
    borderRightWidth: 0
  },

  bookInfo: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 5,
    paddingLeft: 5,
    marginTop: 2
  },

  bookThumbImageContainer: {
    width: 45,
    height: 53,
    marginTop: 7,
    marginLeft: 5,
    marginBottom: 5
  },

  bookThumbImage: {
  },

  bookTitle: {
    fontStyle: 'italic',
    fontWeight: '600',
    fontSize: 14
  },

  bookAuthor: {
    marginTop: 2,
    fontStyle: 'italic',
    fontWeight: '300',
    fontSize: 14,
    color: '#8F8E94'
  },

  bookCategory: {
    width: .5 * width,
    color: '#FA2D65',
    fontWeight: '400',
  },

  bookPrice: {
    color: '#39A154',
    fontWeight: '800',
    width: .5 * width,
    textAlign: 'center'
  },

  // NEW LISTING
  // COMMON FORM FIELDS
  listingContainerDefault: {
    borderColor: '#50514F',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0,
  },

  listingSelectContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
  },

  listingSelectText: {
    fontSize: 16,
    color: '#50514F',
    marginTop: 5,
    marginRight: 25
  },

  listingSelectButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10
  },

  listingSelectButtonActive: {
    backgroundColor: '#FA2D65',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    width: 70,
    height: 30
  },

  listingSelectButtonTextActive: {
    color: 'white',
    textAlign: 'center' 
  },

  listingSelectButtonInactive: {
    backgroundColor: 'white',
    borderColor: '#FA2D65',
    borderWidth: 1,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    width: 70,
    height: 30
  },

  listingSelectButtonTextInactive: {
    color: '#FA2D65',
    textAlign: 'center'
  },
  
  uploadPicContainer: {
    paddingTop: 10,
    height: 50,
    alignItems: 'center'
  },

  uploadPicButton: {
    backgroundColor: '#7790E6',
    borderRadius: 20,
    width: 0.6 * width,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  uploadPicButtonText: {
    color: 'white',
    fontSize: 16 
  },

  listingTextInputContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 4,
    paddingBottom: 8,
    flexDirection: 'row'
  },

  listingTextInput: {
    width: 0.8 * width,
    height: 30
  },

  listingPicker: {
    marginLeft: -5,
  },

  listItButtonContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },

  listItButton: {
    borderRadius: 5,
    backgroundColor: '#FA2D65',
    width: 0.4 * width,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },

  listItButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18
  }



}); 

export default styles;