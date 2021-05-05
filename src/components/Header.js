import React from "react";
import { Link } from 'react-router-dom';
import { withFirestore, isLoaded } from 'react-redux-firebase';

function Header(props){

  

  const auth = props.firebase.auth();
  console.log(auth.currentUser);
  if (!isLoaded(auth)) {
    return(
      <>
        <h1>Memory Space</h1>
        <h1>Loading...</h1>
      </>
    )
  }

  if ((isLoaded(auth)) && (auth.currentUser != null)) {
    return (
      <>
      <h1>Memory Space</h1>
      <div id="nav">
        <span className="links"><Link to="/">Home</Link> |<Link to="/logout">Log Out</Link></span>
      </div>
      </>
    );
  }

  if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <>
        <h1>Memory Space</h1>
        <div id="nav">
          <span className="links"><Link to="/">Home</Link> | <Link to="/login">Log In</Link> | <Link to="/signup">Sign Up</Link></span>
        </div>
      </>
    );
  }
}

export default withFirestore(Header);