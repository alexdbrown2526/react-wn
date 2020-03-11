import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBHgL2iRsFKrcvTWCGb6c9U2iGbg7ELu3E",
    authDomain: "wn-store.firebaseapp.com",
    databaseURL: "https://wn-store.firebaseio.com",
    projectId: "wn-store",
    storageBucket: "wn-store.appspot.com",
    messagingSenderId: "123816077937",
    appId: "1:123816077937:web:98c479da29db1cbb0b49d0",
    measurementId: "G-7CMMRMD61Z"
  };

  export const createUserProfileDocument = async (userAuth, additionalData ) => {
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if (!snapShot.exists) {
            const {displayName, email} = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (error) {
                console.log('error creating user', error.message);
                
            }
        }

        return userRef;
        
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase
