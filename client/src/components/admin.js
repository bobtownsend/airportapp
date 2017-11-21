import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { connect } from "react-redux";
import * as actions from "../actions";
import PropTypes from "prop-types";
import axios from "axios";
import { Thumbnail, Button, Alert } from "react-bootstrap";

const ROOT_URL = "http://localhost:8080/api/v1";

let userProfile = [];

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      users: [],
      alertVisible: false,
      alertId: ""
    };
  }
  static contextTypes = {
    router: PropTypes.object
  };
  componentWillMount() {
    axios
      .post(`${ROOT_URL}/fetchAllUsers`)
      .then(response => {
        this.setState({ users: response.data.payload });
        console.log("CHANGED STATE");
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("STATE IS: ");
    console.log(this.state);
  }

  handleButtonClick(id, email) {
    this.props.removeUser(id, email);
    window.location.reload(true);
  }
  handleAlertDismiss() {
    this.setState({ alertVisible: false });
  }

  handleAlertShow(id) {
    this.setState({ alertVisible: true, alertId: id });
  }
  render() {
    const users = this.state.users;
    console.log(users);

    return (
      <div>
        <div>
          <div>
            <Navbar />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p style={{ "font-size": "25px" }}>Welcome, Admin!</p>
          <br />
          <br />

          {users.map(user => {
            return (
              <Thumbnail>
                <h3>
                  {user.firstName}, {user.lastName}
                </h3>
                <p>{user.email}</p>
                <p>{user.phoneNumber}</p>
                {user.isAdmin == true ? (
                  <p style={{ color: "red", "font-size": "15px" }}>
                    Account is an Admin{" "}
                  </p>
                ) : (
                  <p />
                )}
                <p>
                  <Button
                    bsStyle="warning"
                    onClick={() => this.handleAlertShow(user._id)}
                  >
                    Delete
                  </Button>
                </p>
                {this.state.alertVisible == true &&
                this.state.alertId == user._id ? (
                  <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
                    <h4>
                      Are you sure you want to delete {user.firstName},{" "}
                      {user.lastName}?
                    </h4>
                    <p>
                      <Button
                        onClick={() =>
                          this.handleButtonClick(user._id, user.email)}
                        bsStyle="danger"
                      >
                        Delete User
                      </Button>
                      <span> or </span>
                      <Button onClick={() => this.handleAlertDismiss()}>
                        Cancel
                      </Button>
                    </p>
                  </Alert>
                ) : (
                  <p />
                )}
              </Thumbnail>
            );
          })}
          <div />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps, actions)(Admin);
