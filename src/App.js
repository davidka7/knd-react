import React from 'react';
import { connect } from "react-redux";
import './App.css';
import './container/MainBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/sketchy/bootstrap.min.css";
import MainBar from './container/MainBar';
import IconPage from './component/IconPage';
// import Customization from './component/Customization';
import Profile from './container/Profile';
import Home from './container/Home';
import BoardPage from './component/BoardPage';
import ProjectPage from './component/ProjectPage';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

const App = ({user}) => {


  return (
    <div className="App-header" >
      <Router>
        <MainBar />
        <Route exact path='/' render={(routeProps) =>
                user ? <Redirect to={{pathname: '/projects'}} /> : <Home {...routeProps} />} />
        <Route exact path='/projects/:projectId' render={(routeProps) => 
                <BoardPage {...routeProps} />} />
        <Route exact path='/home' render={(routeProps) => 
                <Home {...routeProps} />} />
        <Route exact path='/projects' render={(routeProps) => 
                <ProjectPage {...routeProps} />} />
        <Route exact path='/icons' render={(routeProps) => 
                <IconPage {...routeProps} />} />
        <Route exact path='/profile' render={(routeProps) => 
                !user ? <Redirect to={{pathname: '/'}} /> : <Profile {...routeProps} />} />
                
        {/* <Route exact path='/settings' render={(routeProps) => 
                <Settings {...routeProps} />} /> */}

      </Router>

    </div>
  );
}

const mapStateToProps = (store) => {
  return {user: store.userContext.user}
}

export default connect(mapStateToProps)(App)
