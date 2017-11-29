import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import * as actions from "../../actions";
import PropTypes from "prop-types";
import ReactFilestack from "filestack-react";
import Test from "../filestack.js";
import Footer from "../footer";
import { Button, Alert } from "react-bootstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      passwordConfirm: "",
      adminCode: "",
      alertVisible: false
    };
  }
  static contextTypes = {
    router: PropTypes.object
  };
  // componentWillUpdate(nextProps) {
  //   if (this.props.authenticated) {
  //     localStorage.setItem("userEmail", this.props.values.email);
  //     this.context.router.history.push("/");
  //   }
  // }
  handleFormSubmit(event) {
    event.preventDefault();
    // Call action creator to sign up the user
    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.value;

    let email = this.refs.email.value;

    let password = this.refs.password.value;
    let phoneNumber = this.refs.phoneNumber.value;
    let adminCode = this.refs.adminCode.value;

    if (adminCode == undefined || adminCode == "" || adminCode == null) {
      let adminCode = "";
    } else if (this.refs.adminCode) {
      adminCode = this.refs.adminCode.value;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    console.log(phoneNumber);
    this.props.signupUser(
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      adminCode
    );

    console.log(this.props.values);
    let authenticated = localStorage.getItem("authenticated");
    localStorage.setItem("authenticated", false);
    localStorage.setItem("userEmail", this.props.values.email);
    window.location.reload(true);

    this.context.router.history.push("/signin");
    this.context.router.refresh;
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
  handleAlertDismiss() {
    this.setState({ alertVisible: false });
  }

  handleAlertShow() {
    this.setState({ alertVisible: true });
  }
  render() {
    const {
      handleSubmit,
      fields: {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        passwordConfirm
      }
    } = this.props;

    return (
      <div className="tg-login__wrapper">
        <Test />
        <form>
          <fieldset className="form-group">
            <label>First Name</label>
            <input
              ref="firstName"
              className="form-control"
              placeholder="Enter First Name"
            />
          </fieldset>
          <fieldset className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              ref="lastName"
              placeholder="Enter Last Name"
            />
          </fieldset>
          <fieldset className="form-group">
            <label>Phone Number</label>
            <input
              className="form-control"
              ref="phoneNumber"
              placeholder="Enter Phone Number"
            />
          </fieldset>
          <fieldset className="form-group">
            <label>Email:</label>
            <input
              className="form-control"
              ref="email"
              placeholder="Enter email"
            />
            {email.touched &&
              email.error && <div className="error">{email.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <input
              className="form-control"
              ref="password"
              type="password"
              placeholder="Enter password"
            />
            {password.touched &&
              password.error && <div className="error">{password.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <label>Confirm Password:</label>
            <input
              className="form-control"
              {...passwordConfirm}
              type="password"
              placeholder="Enter password again"
            />
            {passwordConfirm.touched &&
              passwordConfirm.error && (
                <div className="error">{passwordConfirm.error}</div>
              )}
          </fieldset>

          <fieldset className="form-group">
            <label>Admin Code</label>
            <input
              className="form-control"
              ref="adminCode"
              placeholder="Enter Admin Code"
            />
          </fieldset>
          {this.renderAlert()}

         {/* <Button onClick={() => this.handleAlertShow()}>I'm an Admin!</Button>}*/}

          {this.state.alertVisible == true ? (
            <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
              <h4>Enter Your Admin Code.</h4>

              <fieldset className="form-group">
                <label>Admin Code</label>
                <input
                  className="form-control"
                  ref="secondCode"
                  placeholder="Enter Admin Code"
                />
              </fieldset>
              <span> or </span>
              <Button onClick={() => this.handleAlertDismiss()}>Cancel</Button>
            </Alert>
          ) : (
            <p />
          )}
          <br />
          {/* <button action='submit' className='btn btn-primary'>Upload Photo!</button> */}
          <center>
          <button
            onClick={this.handleFormSubmit.bind(this)}
            action="submit"
            className="btn btn-primary"
          >
            Sign up!
          </button>
          </center>
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
function validate(formProps) {
  const errors = {};
  if (!formProps.email) {
    errors.email = "Please enter an email";
  }
  if (!formProps.password) {
    errors.password = "Please enter a password";
  }
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = "Please enter a password confirmation";
  }
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = "Passwords must match";
  }
  return errors;
}
function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}
export default reduxForm(
  {
    form: "signup",
    fields: ["email", "password", "passwordConfirm"],
    validate
  },
  mapStateToProps,
  actions
)(Signup);

