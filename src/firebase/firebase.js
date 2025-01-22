// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXHTEqM0ns-lScST-Y8XSvXKr8lKB2P74",
  authDomain: "gdhdfry-431c1.firebaseapp.com",
  projectId: "gdhdfry-431c1",
  storageBucket: "gdhdfry-431c1.firebasestorage.app",
   messagingSenderId: "502324329380",
  appId: "1:502324329380:web:e498a13f445f819289df31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const realTiemDB = getDatabase(app)
