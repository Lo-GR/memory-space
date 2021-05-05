import React from "react";
import firebase from 'firebase/app';

function Signup(){
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log('successfully signed up!');
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form id="form" on Submit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='Email' />
        <input
        type='password'
        name='password'
        placeholder='Password' />
        <button type='submit'>Log in</button>
      </form>
    </>
  );
}

export default Signup