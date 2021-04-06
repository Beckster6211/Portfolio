import React from "react";
import * as ReactBootStrap from "react-bootstrap";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function WorkingOnIt() {
  return (
    <div>
      <h1>hi</h1>
      {/* <Router>
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="xl"
          bg="warning"
          variant="light"
        >
          <ReactBootStrap.Navbar.Brand>
            Complete Projects
          </ReactBootStrap.Navbar.Brand>
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
        </Switch>
      </Router> */}
    </div>
  );
}

export default WorkingOnIt;
