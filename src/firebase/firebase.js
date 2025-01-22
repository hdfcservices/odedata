// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFXcFbFhK9K-MCYCuNbvKU39pjWeTGxw0",
    authDomain: "nddatamy.firebaseapp.com",
    databaseURL: "https://nddatamy-default-rtdb.firebaseio.com",
    projectId: "nddatamy",
    storageBucket: "nddatamy.firebasestorage.app",
    messagingSenderId: "835242984056",
    appId: "1:835242984056:web:009801117d5b7e8ca1638d",
    measurementId: "G-PM50Q749VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const realTiemDB = getDatabase(app)
