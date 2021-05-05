import Header from "./Header";
import React from "react";
import MemoryControl from './MemoryControl';
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path="/">
          <MemoryControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
