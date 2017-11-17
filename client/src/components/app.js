import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Component } from "react";
import footer from "./footer";
import FontAwesome from "react-fontawesome";
import Navbar from "./navbar";
import Calendar from "./calendar";
import Feature from "./feature";
import Homepage from "./homepage";
import profile from "./profile";
import privacy from "./privacy";
import mycalendar from "../components/calendar";
import RequireAuth from "./auth/require_auth";
import Signin from "./auth/signin";
import Signout from "./auth/signout";
import Signup from "./auth/signup";
import "../index.css";
import Admin from './admin';
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar>{Navbar}</Navbar>
            <div>
              <Route exact path="/" component={Homepage} />
              <Route path="/signin" component={Signin} /> 
              <Route path="/userHomepage" component={Homepage} /> 
              <Route path="/privacy" component={privacy} />              
              <Route path="/signup" component={Signup} />
              <Route path="/signout" component={Signout} />
              <Route path="/calendar" component={mycalendar} />
              <Route path="/profile" component={profile} />
              <Route path="/admin" component={Admin} />


              <Route path="/feature" component={RequireAuth(Feature)} />
            </div>
            <footer>{footer}</footer>
          </div>
        </Router>
      </div>
    );
  }
}
