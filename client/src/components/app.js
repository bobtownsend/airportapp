import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./auth/signin";
import Signout from "./auth/signout";
import Signup from "./auth/signup";
import Feature from "./feature";
import RequireAuth from "./auth/require_auth";
import Homepage from "./homepage";
import profile from "./profile";
import "../index.css";
import FontAwesome from "react-fontawesome";
import mycalendar from "../components/calendar";

// import Tripbuild from './tripbuild';
// import Tripresults from './tripresults';
// import Places from './places';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route path="/signin" component={Signin} />
          <Route path="/Profile" component={profile} />
          <Route path="/signup" component={Signup} />
          <Route path="/signout" component={Signout} />
          <Route path="/calendar" component={mycalendar} />

          <Route path="/feature" component={RequireAuth(Feature)} />
        </div>
      </Router>
    );
  }
}
