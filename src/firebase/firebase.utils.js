//import firebase from 'firebase/app';
import firebase from 'firebase/compat/app'; //v9

//import 'firebase/firestore';
import 'firebase/compat/firestore'; //v9

//import 'firebase/auth';
import 'firebase/compat/auth'; //v9

const config = {
    apiKey: "AIzaSyABwK715oQfoRQnXXa0XRoIlUZiu5hr_bk",
    authDomain: "clothing-db-e6e68.firebaseapp.com",
    projectId: "clothing-db-e6e68",
    storageBucket: "clothing-db-e6e68.appspot.com",
    messagingSenderId: "901788953840",
    appId: "1:901788953840:web:d2d755d390d066df546635",
    measurementId: "G-L3M79VHEVX"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;