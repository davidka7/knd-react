import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
// import { getUser } from '../actions/userAction';

const MainBar = ({store, getUser}) => {
// console.log(store)
//   useEffect(() => {
//     console.log(store)
//     getUser(1);
// }, [])
// console.log(store.userContext.user.id)
  return (
    <div className="mainBar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand">Plany Boat</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto" >
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
                <Link to="/customization" className="nav-link">Settings</Link>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//       getUser: (id) => getUser(id).then(dispatch)
//   }
// }
// console.log(store)

const mapStateToProps = (store) => {
  return {store: store}
}

export default connect(mapStateToProps)(MainBar)