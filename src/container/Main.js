import React from 'react';
import Project from '../component/Project';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Icon from '../component/Icon';
import Customization from '../component/Customization';
import Profile from '../container/Profile';
import Home from '../component/Home';


const Main = () => {

  return (
    <div className="mainBar">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Plany Boat</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/icons" className="nav-link">Icons</Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">Profile</Link>
              </li>
              <li className="nav-item">
                <Link to="/customization" className="nav-link">Customization</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>

          </div>
        </nav>

        
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
          <Route path="/icons">
            <Icon />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/customization">
            <Customization />
          </Route>
        

      </Router>
    </div>
  )
}

export default Main