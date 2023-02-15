import React from 'react'

function hamClick() {
    const navUL = document.getElementById("nav-ul");
    navUL.classList.toggle("show");
};

export function NavBar() {
    return(
        <header>
            <nav>
                <div className="left-head">
                <a className="logo">POLAR</a>
                <a className="slogan">Bills made easy</a>
                </div>
                <button className="hamburger" id="hamburger" onClick={hamClick}>
                    <i className="fas fa-bars"></i>
                </button>
                <ul className="nav-ul" id="nav-ul">
                    <a href="#About">About</a>
                    <a href="#profile">Profile</a>
                </ul>
            </nav>
        </header>
    );
};

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