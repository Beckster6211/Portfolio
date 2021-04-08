import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./working.css";
import CompleteWorkingPage from "./index";
import Favourites from "../favourites/favourites";
import CanvasDrawing from "../canvasDrawings/canvasDrawings";

function WorkingOnIt() {
  return (
    <div>
      <Router>
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="xl"
          bg="secondary"
          variant="light"
        >
          <Link to="/workinprogress">
            <ReactBootStrap.Navbar.Brand className="workingNavbar">
              Improving/fixing...
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
              <Link to="/canvasdrawing">
                <ReactBootStrap.Nav.Link href="/canvasdrawing">
                  My Stress Relief
                </ReactBootStrap.Nav.Link>
              </Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
        <Switch>
          <Route path="/canvasdrawing">
            <CanvasDrawing />
          </Route>
          <Route path="/favourite">
            <Favourites />
          </Route>
          <Route path="/workinprogress">
            <CompleteWorkingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default WorkingOnIt;
