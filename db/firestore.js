import * as firebase from 'firebase';

import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIjqgIDsospDvGV9gOHu88jhYodXD6t3M",
  authDomain: "sign-out-app-43e63.firebaseapp.com",
  projectId: "sign-out-app-43e63",
  storageBucket: "sign-out-app-43e63.appspot.com",
  messagingSenderId: "918271535683",
  appId: "1:918271535683:web:3ba4e12f7462a1078002f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
