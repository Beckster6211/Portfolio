import React from "react";
import * as ReactBootStrap from "react-bootstrap";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./nav.css";
import Button from "react-bootstrap/Button";
import Home from "../home/home";
import Complete from "../complete/complete";
import WorkingOnIt from "../workingOnIt/workingOnIt";

function Nav() {
  return (
    <Router>
      <div className="navbar">
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="xl"
          bg="info"
          variant="light"
        >
          <Link to="/">
            <ReactBootStrap.Navbar.Brand className="homeWord">
              Home
            </ReactBootStrap.Navbar.Brand>
          </Link>
          {/* <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav"> */}
          <Link to="/complete">
            <Button
              className="completeButton"
              href="/complete"
              variant="primary"
            >
              Complete ✔️
            </Button>
          </Link>{" "}
          <Link to="/workinprogress">
            <Button
              className="workingButton"
              href="/workinprogress"
              variant="danger"
            >
              Work in progress 👷
            </Button>
          </Link>
          {/* <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <ReactBootStrap.Nav className="mr-auto">
              <Link to="/birthday">
                <ReactBootStrap.Nav.Link href="/birthday">
                  No more stamps
                </ReactBootStrap.Nav.Link>
              </Link>
              <Link to="/mickey">
                <ReactBootStrap.Nav.Link href="/mickey">
                  Everyones Favourite Mouse
                </ReactBootStrap.Nav.Link>
              </Link>
              <Link to="/why">
                <ReactBootStrap.Nav.Link href="/why">
                  Why?
                </ReactBootStrap.Nav.Link>
              </Link>
            </ReactBootStrap.Nav> */}
          {/* <ReactBootStrap.NavDropdown
              title="Complete"
              id="basic-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                Action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Another action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                Something
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                Separated link
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.NavDropdown
              title="Work in progress"
              id="basic-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                Action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Another action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                Something
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                Separated link
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown> */}
          {/* </ReactBootStrap.Navbar.Collapse> */}
        </ReactBootStrap.Navbar>

        <Switch>
          {/* <Route path="/birthday">
            <Birthday />
          </Route>
          <Route path="/mickey">
            <Mickey />
          </Route>
          <Route path="/why">
            <PandaTrex />
          </Route> */}
          <Route path="/workinprogress">
            <WorkingOnIt />
          </Route>
          <Route path="/complete">
            <Complete />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Nav;
