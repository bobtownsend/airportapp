import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from "../footer";
import axios from 'axios';
class Signin extends Component {
  constructor(props) {
    super(props);

     this.state = {
    email: '',
       password: ''
    
  }
  }
  //add the router object to this.context to allow for redirects
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUpdate(nextProps) {
    if (nextProps.authenticated) {

      this.context.router.history.push('/');
      this.context.router.history.push('/');
    };
  };

  handleFormSubmit () {

      let email = this.refs.email.value;
      let password = this.refs.password.value;
    // action creator dispatching creditionals to validate on server
    this.props.signinUser(email, password );
    localStorage.setItem('userEmail', email);
    console.log("New USER SIGNED IN");
    console.log( email );
    
    axios.get('/fetchUser')
    .then(function(response){
      console.log(response)
    })
    .catch(function(error){
      console.log(error);
    })


    this.context.router.history.push('/profile');
    //this.context.router.dispatch(window.location.reload(), null);
    

  };

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    };
  };


  render () {
    const { handleSubmit, fields: { email, password }} = this.props;
    return (

  

      <div className='tg-login__wrapper'>
        <form >
          <fieldset className='form-group'>
            <label>Email:</label>
            <input ref="email" className='form-control' placeholder='Enter email' />
          </fieldset>
          <fieldset className='form-group'>
            <label>Password:</label>
            <input  ref="password" type='password' className='form-control' placeholder='Enter password'  />
          </fieldset>
          {this.renderAlert()}
          <button type="button" className='btn btn-primary' onClick={this.handleFormSubmit.bind(this)}>Sign in</button>
          <br></br>
          <br></br>
          <br></br>
          
        </form>
        <div><Footer /></div>
      </div>
        

    );
  };
};




function mapStateToProps (state) {
  return { errorMessage: state.auth.error, authenticated: state.auth.authenticated };
};

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin)
