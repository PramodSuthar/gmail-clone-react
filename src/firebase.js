// Import the functions you need from the SDKs you need

import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYoCJz8cx7pLiy5ZKfVwtesZIO-WeKnFQ",
    authDomain: "clone-649b9.firebaseapp.com",
    projectId: "clone-649b9",
    storageBucket: "clone-649b9.appspot.com",
    messagingSenderId: "204380121979",
    appId: "1:204380121979:web:def9bfdafffbfc41542bde"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };