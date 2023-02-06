// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue} from "firebase/database";
import { getFirestore} from "firebase/firestore";
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

// Get a reference to the database service
const db = getFirestore(app);

//const billRef = collection(db, "Bills");
//let test = document.getElementById(`test`)

// Attach an asynchronous callback to read the data at our posts reference

/*
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  }, */ //Removed this from package.json because it was making it difficult to test things.