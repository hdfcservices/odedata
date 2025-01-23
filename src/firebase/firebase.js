// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-WkRuqAkQcIL-LFnmCQduSrsMrZFBBZg",
  authDomain: "myok-507b3.firebaseapp.com",
  databaseURL: "https://myok-507b3-default-rtdb.firebaseio.com",
  projectId: "myok-507b3",
  storageBucket: "myok-507b3.firebasestorage.app",
  messagingSenderId: "914274367201",
  appId: "1:914274367201:web:eacceafd5888240e4469a0",
  measurementId: "G-GVDBWYNX9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const realTiemDB = getDatabase(app)
