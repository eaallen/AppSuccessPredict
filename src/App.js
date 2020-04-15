import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import {withFirebase} from './comps/Firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Analyze from './comps/Views/Analyze';
function App(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/Analyze'>
            <Analyze/>
          </Route>
          <Route path='/'>
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default withFirebase(App);
