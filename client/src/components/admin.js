import React from "react";
import { Link } from "react-router-dom";
import Navbar from './navbar';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Thumbnail, Button} from 'react-bootstrap';

const ROOT_URL = 'http://localhost:8080/api/v1';

let userProfile = [];

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      users: []
    }
  }
  static contextTypes = {
    router: PropTypes.object
  };
  componentWillMount(){
    axios.post(`${ROOT_URL}/fetchAllUsers`)
    .then(response => {
        this.setState({ users: response.data.payload});
        console.log("CHANGED STATE");
        console.log(this.state);
    })
    .catch(err => {
    console.log(err)
    });
    console.log("STATE IS: ");
    console.log(this.state);   

}



handleButtonClick(id){
    this.props.removeUser(id);
    window.location.reload(true);
    
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
    <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        Welcome, Admin!
        <br></br>
        <br></br>

        {    users.map((user) => {
            return(
            
            <Thumbnail>
                <h3>{user.firstName}, {user.lastName}</h3>
                <p>{user.email}</p>
                <p>{user.phoneNumber}</p>
                <p>
                <Button bsStyle="warning" onClick={() => this.handleButtonClick(user._id)}>Delete</Button>
                </p>
            </Thumbnail>
        );
    })}
        <div>
        </div>
   

  </div>
    </div>
  
  
    );
  }
}

const mapStateToProps = (state) => {
  return {state: state}
}

export default connect(mapStateToProps, actions)(Admin);


