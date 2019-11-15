import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from './components/BubblePage';

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Login} />
        <PrivateRoute exact path='/' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
