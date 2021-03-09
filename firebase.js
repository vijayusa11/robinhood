import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgEHZ88M2sixkwsF858Z0fB2Jn2S7AY2U",
    authDomain: "robinhood-c77c3.firebaseapp.com",
    projectId: "robinhood-c77c3",
    storageBucket: "robinhood-c77c3.appspot.com",
    messagingSenderId: "848811317967",
    appId: "1:848811317967:web:d558cf47a125e4e16375ba",
    measurementId: "G-Q9V4QPH7L8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { db, auth, provider };
  