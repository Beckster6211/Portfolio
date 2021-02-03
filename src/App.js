//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./components/home/home";
import Calendar from "./components/nasaPOTD/calendar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav id="nav">
          <Link to="/">Home</Link>
          &nbsp; &nbsp;
          <Link to="/potd">Space Picture</Link>
          &nbsp; &nbsp;
          {/* <Link to="https://plusmentor.netlify.app/">Plus Mentor</Link> */}
        </nav>
        <Switch>
          <Route path="/potd">
            <Calendar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
