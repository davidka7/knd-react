import React from 'react';
import './App.css';
import './container/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/sketchy/bootstrap.min.css";
import Main from './container/Main';
import Account from './container/Account';
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

        <Route path="/homepage" exact strict render={
          () => {
            return <Main />
          }
        } />
        <Route path="/" exact strict render={() => (user ? (<Redirect to="/homepage" />) :
          (<Account />))} />

        {/* <Route
          path="/" 
          render={(routeProps) => 
              false ? <Main {...routeProps} />
               : <Redirect to={{pathname: '/account', state: { from: routeProps.location }}} />
            }
          />
       <Route exact path='/account' render={(routeProps) => <Account {...routeProps} />} /> */}

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
