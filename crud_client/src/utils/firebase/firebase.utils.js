// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {useState, useEffect, useContext } from 'react';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDocs, setDoc, query, collection, where, addDoc } from 'firebase/firestore'; 
import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
    } from 'firebase/auth';
    
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2DcHQSl-99p7WhPUjLFFNOpPHHljh-sQ",
    authDomain: "crud-auth-c87f4.firebaseapp.com",
    projectId: "crud-auth-c87f4",
    storageBucket: "crud-auth-c87f4.appspot.com",
    messagingSenderId: "731346116514",
    appId: "1:731346116514:web:8c2e5bd17a5778cde15cfb",
    measurementId: "G-H1XJKGW548"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);





// export const signInWithGooglePopup = async () => {
//     try {
//         const res = await signInWithPopup(auth, provider);
//         const user = res.user;
//         const q = query(collection(db, "users"), where ("uid", "==", user.uid));
//         const docs = await getDocs(q);
//         if (docs.docs. length === 0) {
//             await addDoc(collection(db, "users"), {
//                 uid: user.uid,
//                 name: user.displayName,
//                 authProvider: "google",
//                 email: user.email,  
//             } );
//         }
//     } catch (err) {
//                console.error(err);
//                alert(err.message);
//             }
//            };






export const db = getFirestore();


 export const createUserDocumentFromAuth = async (
     userAuth, 
     additionalInformation = {}
     ) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDocs(userDocRef);
    console.log(userSnapshot.exists());


    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
               displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating the user', error.messsage);
            }
        }



        return userDocRef;
    };

    export const createAuthUserWithEmailAndPassword = async (email, password) => {
        if(!email || !password) return;
        
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    // export const createAuthUserWithEmailAndPassword = async (name, email, password) => {
    //     try {
    //       const res = await createUserWithEmailAndPassword(auth, email, password);
    //       const user = res.user;
    //       await addDoc(collection(db, "users"), {
    //         uid: user.uid,
    //         name,
    //         authProvider: "local",
    //         email,
    //       });
    //     } catch (err) {
    //       console.error(err);
    //       alert(err.message);
    //     }
    //   };





    export const signInAuthUserWithEmailAndPassword = async (email, password) => {
        if(!email || !password) return;

        return await signInWithEmailAndPassword(auth, email, password);
    }

    export const signOutUser = async () => await signOut(auth)
    
    ;


    export const onAuthStateChangedListener = (callback) => 
    
        onAuthStateChanged(auth, callback);





onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});    


