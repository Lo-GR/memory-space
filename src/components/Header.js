import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  return (
    <>
    <h1>Memory Space</h1> 
    <div id="nav">
      <span className="links"><Link to="/">Home</Link> | <Link to="/login">Log In</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/logout">Log Out</Link></span>
    </div>
    </>
  );
}

export default Header;