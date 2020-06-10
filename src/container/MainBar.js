import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const MainBar = ({user, getUser}) => {

  return (
    user ? 
    (<div className="mainBar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/home" className="navbar-brand">Plany Boat</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto" >
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
                <Link to="/customization" className="nav-link">Settings</Link>
              </li>
            </ul>
          </div>
        </nav>
    </div>)
    :
    (null)
  )
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//       getUser: (id) => getUser(id).then(dispatch)
//   }
// }
// console.log(store)

const mapStateToProps = (store) => {
  return {user: store.userContext.user}
}

export default connect(mapStateToProps)(MainBar)