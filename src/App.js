import "./App.css";
import React from "react";
import Home from "./components/home/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header/header";
import SpaceProject from "./components/nasaPOTD/projectSpace";
import PlusMentor from "./components/plusMentor/plusMentor";
import EngageMate from "./components/engageMate/engageMate";
import Favourites from "./components/favourites/favourites";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <div className="App">
          <nav id="nav">
            <Link to="/">Home</Link>
            &nbsp; &nbsp;
            <Link to="/PlusMentor">PlusMentor</Link>
            &nbsp; &nbsp;
            <Link to="/EngageMate">EngageMate</Link>
            &nbsp; &nbsp;
            <Link to="/potd">Project Space</Link>
            &nbsp; &nbsp;
            <Link to="/myFavourite">Project Favourites</Link>
            &nbsp; &nbsp;
          </nav>
          <Switch>
            <Route path="/myFavourite">
              <Favourites />
            </Route>
            <Route path="/EngageMate">
              <EngageMate />
            </Route>
            <Route path="/PlusMentor">
              <PlusMentor />
            </Route>
            <Route path="/potd">
              <SpaceProject />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <Header />
    </div>
  );
}

export default App;
