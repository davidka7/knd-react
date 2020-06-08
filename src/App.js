import React from 'react';
import './App.css';
import './container/MainBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/sketchy/bootstrap.min.css";
import MainBar from './container/MainBar';
import Account from './container/Account';
import IconPage from './component/IconPage';
import Customization from './component/Customization';
import Profile from './container/Profile';
import Home from './component/Home';
import BoardList from './component/BoardList';
import Project from './component/Project';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
const App = () => {

  const one = () => {
    let user = undefined
    return (


      <Router>
        <MainBar />
        <Route
            exact path='/' 
            render={(routeProps) =>
                user ? <Redirect to={{pathname: '/projects'}} /> : <Account {...routeProps} />} />
        <Route exact path='/boards' render={(routeProps) => <BoardList {...routeProps} />} />
        <Route exact path='/home' render={(routeProps) => <Home {...routeProps} />} />
        <Route exact path='/projects' render={(routeProps) => <Project {...routeProps} />} />
        <Route exact path='/icons' render={(routeProps) => <IconPage {...routeProps} />} />
        <Route exact path='/profile' render={(routeProps) => <Profile {...routeProps} />} />
        <Route exact path='/customization' render={(routeProps) => <Customization {...routeProps} />} />

      </Router>

    )
  }
  return (
    <div className="App-header" >
      {one()}

    </div>
  );
}

export default App;
