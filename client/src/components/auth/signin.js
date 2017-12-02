import React, { Component } from "react";
import { reduxForm } from "redux-form";
import * as actions from "../../actions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "../footer";
import axios from "axios";
class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      failedSignIn: false
    };
  }
  //add the router object to this.context to allow for redirects
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUpdate(nextProps) {
    if (nextProps.authenticated) {
      this.context.router.history.push("/profile");
    }
  }

  handleFormSubmit() {
    let email = this.refs.email.value;
    let password = this.refs.password.value;

    let adminCode = this.refs.adminCode.value;

    if (adminCode == "123secret"){
      this.context.router.history.push("/admin");
    }
    // action creator dispatching creditionals to validate on server
    this.props.signinUser(email, password);
    localStorage.setItem("userEmail", email);
    console.log("New USER SIGNED IN");
    console.log(email);
    localStorage.setItem("authenticated", true);
    //Refresh page to re-render navbar
    this.context.router.refresh;
    let auth = localStorage.getItem("authenticated");
    if (auth === true) {
      this.context.router.history.push("/profile");
    }
    this.setState({ failedSignIn: true });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;
    return (
      <div className="tg-login__wrapper">
        <form>
          <fieldset className="form-group">
            <label className="email-fieldset">Email:</label>
            <input
              ref="email"
              className="form-control"
              placeholder="Enter email"
            />
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <input
              ref="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </fieldset>
          {this.renderAlert()}
          <fieldset className="form-group">
            <label>Admin Code:</label>
            <input
              ref="adminCode"
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </fieldset>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleFormSubmit.bind(this)}
          >
            Sign in
          </button>
          <br />
          <br />
          <br />
        </form>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    authenticated: state.auth.authenticated
  };
}

export default reduxForm(
  {
    form: "signin",
    fields: ["email", "password"]
  },
  mapStateToProps,
  actions
)(Signin);
