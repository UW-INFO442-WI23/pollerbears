// Import the functions you need from the SDKs you need
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";




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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase

/*
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  }, */ //Removed this from package.json because it was making it difficult to test things.
