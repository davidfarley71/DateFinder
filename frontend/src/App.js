import React, { useState, useEffect } from 'react';
import axios from "axios";
import { AgGrid } from './AgGrid'
import firebaseConfig from './authConfig'
import Login from './Login'
import { UserComponentFactory } from 'ag-grid-community';

export default function App() {
  let user = null;
  useEffect(() => {
    let temp = {}
    console.log('user')

    firebaseConfig.auth().onAuthStateChanged((newUser) => {
      let temp2 = null;
      if (newUser) {
        console.log(user)
        // setUser(newUser)
        // temp2 = newUser;
        user = newUser;
        console.log(user+'test inside')
      }
      else {
        console.log(newUser+"no user buddy oll pal")

      }
      // temp = temp2;

    })
    console.log('user')
  });

  let logout = function () {
    firebaseConfig.auth().signOut();
  }

  return (

    <div className="App">
      <h1>Search for personalities</h1>
      {user ? <div>Hello {user.email}
        <button onClick={logout()}>Loggout</button></div> : <Login user={user} />}
      {/* <AgGrid user={user} /> */}
    </div>
  );




}

