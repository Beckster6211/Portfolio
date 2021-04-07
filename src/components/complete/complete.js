import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./complete.css";
import CompleteHomePage from "./index";
import EngageMate from "../engageMate/engageMate";
import PlusMentor from "../plusMentor/plusMentor";
import SpaceProject from "../nasaPOTD/projectSpace";
function Complete() {
  return (
    <div>
      <Router>
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="xl"
          bg="warning"
          variant="light"
        >
          <Link to="/complete">
            <ReactBootStrap.Navbar.Brand className="completeNavbar">
              Complete Projects
            </ReactBootStrap.Navbar.Brand>
          </Link>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <Link to="/engagemate">
                <ReactBootStrap.Nav.Link href="/enegagemate">
                  EngageMate
                </ReactBootStrap.Nav.Link>
              </Link>
              <Link to="/plusmentor">
                <ReactBootStrap.Nav.Link href="/plusmentor">
                  PlusMentor
                </ReactBootStrap.Nav.Link>
              </Link>
              <Link to="/nasapotd">
                <ReactBootStrap.Nav.Link href="/nasapotd">
                  Nasa POTD
                </ReactBootStrap.Nav.Link>
              </Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
        <Switch>
          <Route path="/engagemate">
            <EngageMate />
          </Route>
          <Route path="/plusmentor">
            <PlusMentor />
          </Route>
          <Route path="/nasapotd">
            <SpaceProject />
          </Route>
          <Route path="/complete">
            <CompleteHomePage />
          </Route>
        </Switch>
        {/* <div>
          <h2>Complete projects</h2>
          <p>
            The ultimate aim is to move as many things over from the work in
            progress section to here. 😁
          </p>
          <p>They may need some small tweaking 🤏</p>
          <p>
            (My portfolio itself is still a work in progress really and I hope
            it stays that way) 😉
          </p>
        </div> */}
      </Router>
    </div>
  );
}

export default Complete;
