import React from 'react'
import "../styles/navbar.css";

function Navbar() {
  return (
    
    <div className="navbar">
      <div className="logoContainer">
        <a className="logo" href="/">LOGO</a>
      </div>
      <div className="navLinks">
        <p><a href="...">Sign In</a></p>
        <p><a href="...">Create Account</a></p>
        <p><a href="/movies">Movies</a></p>
        <p><a href="...">Shows</a></p>
        <input type='search' placeholder='search' name='searchBar' id='searchBar' />
      </div>
    </div>

  )
}

export default Navbar