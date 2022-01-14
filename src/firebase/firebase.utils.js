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

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(snapShot.exists){
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;