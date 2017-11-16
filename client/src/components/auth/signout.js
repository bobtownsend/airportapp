import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import Footer from "../footer";

class Signout extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  
  componentWillMount () {
    this.props.signoutUser();
    window.location.reload();
    this.context.router.history.push('/');
    

    // <div><Footer /></div>
    
  }
};

export default connect(null, actions)(Signout);


