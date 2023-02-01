// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfk5SNHxjo_n8T-qWBQ04sbekYiy2Mku0",
  authDomain: "polar-82756.firebaseapp.com",
  projectId: "polar-82756",
  storageBucket: "polar-82756.appspot.com",
  messagingSenderId: "495294874714",
  appId: "1:495294874714:web:d090a88f8f053b88f28463",
  measurementId: "G-QFN3KFZYKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//import the function from the realtime database module
import { getDatabase } from 'firebase/database';
// Get a reference to the database service
const db = getDatabase();
