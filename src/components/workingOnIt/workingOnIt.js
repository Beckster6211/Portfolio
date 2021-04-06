import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favourites from "../favourites/favourites";

function WorkingOnIt() {
  return (
    <div>
      {/* <h1>hi</h1> */}
      <Router>
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="xl"
          bg="secondary"
          variant="light"
        >
          <Link to="workinprogress">
            <ReactBootStrap.Navbar.Brand>
              Needs improving (or fixing)
            </ReactBootStrap.Navbar.Brand>
          </Link>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <Link to="/favourite">
                <ReactBootStrap.Nav.Link href="/favourite">
                  Favourites
                </ReactBootStrap.Nav.Link>
              </Link>
              {/* <Link to="/plusmentor">
                <ReactBootStrap.Nav.Link href="/plusmentor">
                  PlusMentor
                </ReactBootStrap.Nav.Link>
              </Link>
              <Link to="/nasapotd">
                <ReactBootStrap.Nav.Link href="/nasapotd">
                  Nasa POTD
                </ReactBootStrap.Nav.Link>
              </Link> */}
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
        <Switch>
          <Route path="/favourite">
            <Favourites />
          </Route>
          {/* <Route path="/plusmentor"><PlusMentor /></Route> */}
          {/* <Route path="/nasapotd"><SpaceProject /></Route> */}
        </Switch>
        <div>
          <h2>Not quite there yet...</h2>
          <p>
            The goal is to have lots of things in here that I can go back to as
            I gain experience and knowledge 😁 and move to complete
          </p>
          <p>💂‍♀️ "No project gets left behind" 💂‍♀️</p>
          <p>
            (Hopefully this will get longer and then shorter, a yoyo approach
            🪀)
          </p>
          <h2>The Biggest Work in Progress - My Portfolio</h2>
        </div>
      </Router>
    </div>
  );
}

export default WorkingOnIt;
