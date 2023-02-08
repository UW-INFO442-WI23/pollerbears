import React from 'react'

export default function navbar(props){
    return(
        <header>
            <nav>
                <a className="logo">POLAR</a>
                <button className="hamburger" id="hamburger" onClick={hamClick}>
                    <i className="fas fa-bars"></i>
                </button>
                <ul className="nav-ul" id="nav-ul">
                    <a href="#home">Home</a>
                    <a href="#profile">Profile</a>
                </ul>
            </nav>
        </header>
    );
};

function hamClick() {
    const navUL = document.getElementById("nav-ul");
    navUL.classList.toggle("show");
};