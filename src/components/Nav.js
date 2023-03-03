import "firebase/compat/auth";
import "firebase/compat/firestore";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import firebase from "firebase/compat/app";

function hamClick() {
  const navUL = document.getElementById("nav-ul");
  navUL.classList.toggle("show");
}

const handleGoogleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // Get the user information
      const user = result.user;
      const { displayName, email, photoURL } = user;

      // Save the user information to state or local storage
      // For example:
      // setUser({ name: displayName, email, photoURL });
    })
    .catch((error) => {
      // Handle sign-in errors
      console.log(error.message);
    });
};

const handleSignOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};

export function NavBar() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setCurrentUser(user);
      } else {
        // User is signed out
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <header>
      <nav>
        <div className="left-head">
          <a className="logo">POLAR</a>
          <a className="slogan">Bills made easy</a>
        </div>

        {currentUser ? (
          <div className="profile-wrapper">
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        )}

        <button className="hamburger" id="hamburger" onClick={hamClick}>
          <i className="fas fa-bars"></i>
        </button>

        <ul className="nav-ul" id="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          {currentUser && (
            <img
              className="profile-photo-small"
              src={currentUser.photoURL}
              alt="User profile"
            />
          )}
        </ul>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div>
        <img
          className="footer-icon"
          src="./img/polar.png"
          alt="polar bear icon."
        />
        <img
          className="footer-icon"
          src="./img/king.png"
          alt="king county logo."
        />
      </div>
    </footer>
  );
}
