import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import logo from './fonts/juliusbaer-logo.svg';
import help from './fonts/help.svg';
import './App.css';
import AppStore from './components/appstore/AppStore';
import Help from './components/help/Help';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <div className="App-header">
            <div className="App-header-text">
            <img src={logo} className="Logo" alt="Julius Bär" />
              <p>Internal App Store</p>
            </div>
            <div className="App-header-help">
              <Link to="/help"><img src={help} alt="Help" /></Link>
            </div>
          </div>
          <div className="App-content">
            <Switch>
              <Route exact path='/' component={AppStore} />
              <Route exact path='/help' component={Help} />
              <Route render={() =>
                <div>
                  <h1>Oops...</h1>
                  <h2>Something went wrong :(</h2>
                </div>
              } />
            </Switch>
          </div>
          <footer>version: 1.0.0</footer>
        </div>
      </Router>
    );
  }
}

export default App;
