import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//     if(!userAuth) return;
//     const userRef = firestore.doc(`users${userAuth.uid}`);
//     const snapShot = await userRef.get();
//     console.log(snapShot);
//     if(!snapShot.exists) {
//         const { displayName, email } = userAuth;
//         const createdAt = new Date();
//         try {
//             await userRef.set({
//                 displayName,
//                 email,
//                 createdAt,
//                 ...additionalData
//             });
//         } catch(error) {
//             console.log('error creating user', error.message)
//         }
//     }
//     return userRef;
// }

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
// move to signin.tsx due to cross origin policy
//export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;