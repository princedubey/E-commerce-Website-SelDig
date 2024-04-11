// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBBwdCDyKw9_PqXW-acpScm9dE-dDdtcrI",
  authDomain: "signin-bad46.firebaseapp.com",
  databaseURL: "https://signin-bad46.firebaseio.com",
  projectId: "signin-bad46",
  storageBucket: "signin-bad46.appspot.com",
  messagingSenderId: "1043112603991",
  appId: "1:1043112603991:web:acb3213cc5667d8bb54e12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;
