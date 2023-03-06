import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function hamClick() {
  const navUL = document.getElementById("nav-ul");
  navUL.classList.toggle("show");
}

export function NavBar({ user, setUser }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      const { displayName, email, photoURL } = user;
      setUserData({ name: displayName, email, photoURL });
    }
  }, [user]);

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Get the user information
        const user = result.user;
        console.log("sign in successful");
        // Set the user state and close the profile
        const { displayName, email, photoURL } = user;
        console.log(user);
        setUserData({ name: displayName, email, photoURL });
        setUser(user);
      })
      .catch((error) => {
        // Handle sign-in errors
        console.log(error.message);
      });
  };

  const handleSignOut = () => {
    firebase.auth().signOut();
    setUser(null);
    setUserData(null);
  };

  return (
    <header>
      <nav>
        {userData ? (
          <div className="profile-wrapper">
            <img
              className="profile-photo-small"
              src={userData.photoURL}
              alt="user profile"
            />
            <button className="sign-in" onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <button className="sign-in" onClick={handleGoogleSignIn}>Sign in with Google</button>
        )}
        <div className="left-head">
          <a className="logo">POLAR</a>
          <a className="slogan">Bills made easy</a>
        </div>
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
          {userData && (
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

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
