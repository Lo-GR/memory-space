import React from "react";
import firebase from 'firebase/app';

function Logout(){
  function doLogOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully logged out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <>
      <button onClick={doLogOut}>Log Out</button>
    </>
  );
}

export default Logout