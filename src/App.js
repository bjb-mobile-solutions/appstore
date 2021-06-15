import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { withFirebase } from './components/Firebase';

import logo from './fonts/juliusbaer-logo.svg';
import help from './fonts/help.svg';
import './App.css';


import * as ROUTES from './constants/routes';


import AppStore from './components/appstore/AppStore';
import Help from './components/help/Help';
import Admin from './components/admin/Admin';


import SignInPage from './components/SignIn';
import SignOutButton from './components/SignOut';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {


    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }
  render() {
    return (
      // <FirebaseContext.Consumer>
      //   {firebase => {
      // return
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <div className="App-header">
            <div className="App-header-text">
              <img src={logo} className="Logo" alt="Julius Bär" />
              <p>Internal App Store</p>
            </div>
            <div className="App-header-help">
              <Link to={ROUTES.HELP}><img src={help} alt="Help" /></Link>
            </div>
          </div>
          <div className="App-content">
            <div>{this.state.authUser ? <SwitchAuth firebase={this.props.firebase} authUser={this.state.authUser} /> : <SwitchNoAuth />}</div>
          </div>
          <footer>
            {this.state.authUser && <div>
              <p>Signed in as: {this.state.authUser.email}</p>
              <SignOutButton />
            </div>}
            <p>version: 4.6.9</p>
          </footer>
        </div>
      </Router >
      // ;
      // }}
      // </FirebaseContext.Consumer>
    );
  }
}

const SwitchAuth = (props) => (
  <Switch>
    <Route exact path={ROUTES.LANDING} render={() => <AppStore firebase={props.firebase} authUser={props.authUser} />} />
    <Route exact path={ROUTES.HELP} component={Help} />
    {props.authUser.email === ROUTES.ADMIN_EMAIL &&
      <Route exact path={ROUTES.ADMIN} render={() => <Admin authUser={props.authUser} />} />
    }
    <Route render={() =>
      <div>
        <h1>Oops...</h1>
        <h2>Something went wrong :(</h2>
        <h2>Thre requested page can not be found</h2>
      </div>
    } />
  </Switch>
);

const SwitchNoAuth = () => (
  <Switch>
    <Route path={ROUTES.LANDING} component={SignInPage} />
  </Switch>
);

export default withFirebase(App);
