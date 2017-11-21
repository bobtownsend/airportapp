import React from "react";
// import { Link } from "react-router-dom";


import Navbar from "./navbar";
import { connect } from "react-redux";
import * as actions from "../actions";
import PropTypes from "prop-types";
import axios from "axios";

import MyCalendar from "./calendar";
import { lang } from "moment";
const ROOT_URL = "http://localhost:8080/api/v1";

class profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      user: [],
      userEvents: []
    };
  }
  static contextTypes = {
    router: PropTypes.object
  };
  componentWillMount() {
    let userEmail = localStorage.getItem("userEmail");
    let auth = localStorage.getItem("authenticated");

    //Find User from DB
    axios
      .post(`${ROOT_URL}/fetchUser`, { userEmail })
      .then(response => {
        this.setState({ authenticated: true, user: response.data.payload });
        console.log("CHANGED STATE");
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("STATE IS: ");
    console.log(this.state);

    //Find events from DB
    axios
      .post(`${ROOT_URL}/fetchEvents`, { userEmail })
      .then(response => {
        console.log("CHANGED STATE");
        console.log(this.state);
        let EventsArray = [];
        response.data.payload.map(event => {
          console.log(event);
          EventsArray.push(event.events);
        });
        console.log(EventsArray);
        let EventsObject = [];

        for (var i = 0; i < EventsArray.length; i++) {
          EventsObject[i] = EventsArray[i][0];
        }
        this.setState({ userEvents: EventsObject });
      })
      .catch(err => {
        console.log("Couldn't Fetch Users Events");
        console.log(err);
      });
  }
  componentDidMount() {
    console.log(this.props);

    //This refreshes page to re-render navbar
    this.context.router.refresh;
    this.context.router.history.push("/profile");
    console.log("COMPONENT DID MOUNT");
  }

  handleFormSubmit() {
    console.log(this.props);
    // Call action creator to sign up the user
    let fullName = this.refs.fullName.value;
    let phoneNumber = this.refs.phoneNumber.value;

    let email = this.refs.email.value;

    let oldEmail = localStorage.getItem("userEmail");
    console.log(oldEmail);
    console.log(fullName);
    console.log(email);
    console.log(phoneNumber);
    this.props.editUser(oldEmail, email, fullName, phoneNumber);
    console.log("editUser function initiated");
  }

  render() {
    const userProfile = this.state.user[0];
    if (userProfile) {
      if (userProfile.isAdmin === true) {
        this.context.router.history.push("/admin");
      }
      console.log(userProfile);
      // const fullName = userProfile[0].firstName + " " + userProfile[0].lastName
      // const email = userProfile[0].email

      // <div>  <br></br><br></br><br></br><br></br><br></br><p>Welcome, </p>
    }
    return (
      <div>
        <div>
          <div>
            <Navbar />
          </div>
          <br />
          <br />
          <br />
          

          <form>
            <fieldset className="form-group">
              <label>Full Name</label>
              <input
                ref="fullName"
                className="form-control"
                placeholder="Enter First Name"
              />
            </fieldset>
            <fieldset className="form-group">
              <label>Email</label>
              <input
                ref="email"
                className="form-control"
                placeholder="Enter First Name"
              />
            </fieldset>
            <fieldset className="form-group">
              <label>Phone Number</label>
              <input
                ref="phoneNumber"
                className="form-control"
                placeholder="Enter First Name"
              />
            </fieldset>
            <button
              onClick={this.handleFormSubmit.bind(this)}
              className="btn btn-primary"
            >
              submit{" "}
            </button>
          </form>
          <MyCalendar userEvents={this.state.userEvents} />
          <div />
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps, actions)(profile);
