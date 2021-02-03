//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Calendar from "./components/nasaPOTD/calendar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav id="nav">
          <Link to="/">Space Birthday Picture</Link>
        </nav> */}
        <Switch>
          <Route path="/">
            <Calendar />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
