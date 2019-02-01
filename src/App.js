import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import AppStore from './components/appstore/AppStore';
import DeviceList from './components/devices//DeviceList';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <div className="App-header">
            <h1>Julius Baer</h1>
            <p>Internal App Store</p>
          </div>
          <div className="App-content">
            <Switch>
              <Route path='/devices' component={DeviceList} />
              <Route exact path='/' component={AppStore} />
              <Route render={() =>
                <div>
                  <h1>Oops...</h1>
                  <h2>Something went wrong :(</h2>
                </div>
              } />
            </Switch>
          </div>
          <footer>version: 0.0.1 (beta)</footer>
        </div>
      </Router>
    );
  }
}

export default App;
