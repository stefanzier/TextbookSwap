import firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyALsi8R4ARXAAtXBEz_zo-abAasbnIsGws",
  authDomain: "textbookswap-4779b.firebaseapp.com",
  databaseURL: "https://textbookswap-4779b.firebaseio.com",
  storageBucket: "",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;