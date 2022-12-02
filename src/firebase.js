// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCLEcJ6SyVW7r82FoM4tUxSLjSpmHPl6po",
  authDomain: "replica-2a92d.firebaseapp.com",
  projectId: "replica-2a92d",
  storageBucket: "replica-2a92d.appspot.com",
  messagingSenderId: "106779440595",
  appId: "1:106779440595:web:ce341efe169bbf2f31eb26",
  // measurementId: "G-H8W9Q809Y2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export {auth, db};

//Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)

// export {auth};
