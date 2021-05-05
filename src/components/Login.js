import React from "react";
import firebase from 'firebase/app';

function Login(){
  function doLogIn(event) {
    event.preventDefault();
    const email = event.target.loginEmail.value;
    const password = event.target.loginPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
      console.log('successfully logged in!');
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <>
      <h1>Log in</h1>
      <form id="form" onSubmit={doLogIn}>
        <input
          type='text'
          name='loginEmail'
          placeholder='Email' />
        <input
        type='password'
        name='loginPassword'
        placeholder='Password' />
        <button type='submit'>Log in</button>
      </form>
    </>
  );
}

export default Login