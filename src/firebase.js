// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCSJPeTKEH2IhmbPX1qWkf5ScG6sSCFuw8",
  authDomain: "to-do-app-with-login.firebaseapp.com",
  projectId: "to-do-app-with-login",
  storageBucket: "to-do-app-with-login.appspot.com",
  messagingSenderId: "178232028444",
  appId: "1:178232028444:web:065f53746479e8f1b59ed9",
  measurementId: "G-90GPDEGGYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {db,auth};