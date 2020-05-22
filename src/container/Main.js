import React from 'react';
import Project from '../component/Project';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Main = () => {

  return (
  <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Plany Boat</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
          <Link className="nav-item active " to="/homepage"> Homepage </Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Projects</a> */}
          <Link className="nav-item active " to="/"> Projects </Link>

        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Icons</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Customization</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
          <Row>
              This is homepage
              <Col><Project /></Col>
          </Row>
  </div>
)
}

export default Main