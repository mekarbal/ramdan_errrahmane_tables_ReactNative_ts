import firebase from 'firebase';
import '@firebase/auth'
// import '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAXIXxLKTdJeNo5rbC1Nt0jmWSFMtTV-9I",
  authDomain: "ramadanauth.firebaseapp.com",
  projectId: "ramadanauth",
  storageBucket: "ramadanauth.appspot.com",
  messagingSenderId: "503630612333",
  appId: "1:503630612333:web:6f2539ac40b1d9bb71fc64"
};

firebase.initializeApp(firebaseConfig);

export default firebase