import React, { useState } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Profile from './Profile';

function hamClick() {
  const navUL = document.getElementById("nav-ul");
  navUL.classList.toggle("show");
};

export function NavBar({ user }){
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userData, setUserData] = useState(null); // Add this line

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
        setUserData({ name: displayName, email, photoURL }); // Change setUser to setUserData

        setIsProfileOpen(false);
      })
      .catch((error) => {
        // Handle sign-in errors
        console.log(error.message);
      });
  };

  const handleSignOut = () => {
    firebase.auth().signOut();
    setIsProfileOpen(false); // add this line
  };

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  return (
    <header>
      <nav>
        {userData ? (
          <div className="profile-wrapper" onClick={handleProfileClick}>
            <img
              className="profile-photo-small"
              src={userData.photoURL}
              alt="user profile"
            />
          </div>
        ) : (
          <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        )}
        <div className="left-head">
          <a className="logo">POLAR</a>
          <a className="slogan">Bills made easy</a>
        </div>
        <button className="hamburger" id="hamburger" onClick={hamClick}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className="nav-ul" id="nav-ul">
          <a href="#About">About</a>
          {userData && (
            <>
              <a href="#Profile" onClick={handleProfileClick}>
                Profile
              </a>
              <a href="#SignOut" onClick={handleSignOut}>
                Sign out
              </a>
            </>
          )}
        </ul>
      </nav>
      {isProfileOpen && <Profile user={userData} setIsProfileOpen={setIsProfileOpen} />} {/* Change user to userData */}
    </header>
  );
};

export default NavBar;


export function Footer() {
  return (
    <footer>
      <div>
        <img className="footer-icon" src="./img/polar.png" alt="polar bear icon." />
        <img className="footer-icon" src="./img/king.png" alt="king county logo." />
      </div>
    </footer>
  );
}
