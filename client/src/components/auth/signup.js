import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import ReactFilestack from 'filestack-react';
import Test from '../filestack.js';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName:'',
      phoneNumber:'',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }
  static contextTypes = {
    router: PropTypes.object
  };
  componentWillUpdate(nextProps) {
    if (this.props.authenticated) {
      localStorage.setItem('userEmail', this.props.values.email);
      this.context.router.history.push('/');
    };
  }
  handleFormSubmit (formProps) {
    // Call action creator to sign up the user
    this.props.signupUser(formProps);
    localStorage.setItem('userEmail', this.props.values.email);
    this.context.router.history.push('/');
  }
  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    };
  }
  renderLinks () {
    if (this.props.authenticated) {
      // show a link for user to go to Dashboard or Sign Out
      return [
        <li className='nav-item' key={1}>{this.props.message}
        </li>
        ,
        <li className='nav-item' key={2}>
          <Link className='btn btn-default tg-login__btn' to='/dashboard'>Dashboard</Link>
        </li>
        ,
        <li className='nav-item' key={3}>
          <Link className='nav-link' to='/signout'>Sign Out</Link>
        </li>
      ];
    } else {
      // show a link for user to Sign In or Sign Up
      return [
        <li className="nav-item">
        <Link id="navLink" className="btn btn-lg btn-primary" to="/signin" key={1}>
          Sign In
        </Link>
      </li>,
      <li className="nav-item" key={2}>
        <Link id="navLink" className="btn btn-lg btn-primary" to="/signup">
          Sign Up
        </Link>
      </li>
    ];
  }
}
  render () {
    const { handleSubmit, fields: { firstName, lastName, phoneNumber, email, password, passwordConfirm }} = this.props;
    return (
   <div>
      <div>
      <div id="myNavbar" className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container">
          <div className="navbar-header">
              
             <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              
              <a href="#" className="navbar-brand">Foster The Future</a>
              
          </div>
          
          <div className="navbar-collapse collapse">
          
              <ul className="nav navbar-nav navbar-right">
                  <li><a href="#header">Home</a></li>
                  <li><a href="#services">services</a></li>
                  <li><a href="#events">events</a></li>
                  <li><a href="#team">team</a></li>
                  <li><a href="#partners">partners</a></li>
                  <li><a href="#contact">contact</a></li>
                   
                  {this.renderLinks()}
             </ul>
           
          </div>
      </div>
  </div>
  </div>
      <div className="tg-login__wrapper">
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <fieldset className='form-group'>
        <label>First Name</label>
        <input className='form-control' {...firstName} placeholder='Enter First Name'/>
        </fieldset>
        <fieldset className='form-group'>
          <label>Last Name</label>
          <input className='form-control' {...lastName} placeholder='Enter Last Name'/>
          </fieldset>
          <fieldset className='form-group'>
            <label>Phone Number</label>
            <input className='form-control' {...phoneNumber} placeholder='Enter Phone Number'/>
            </fieldset>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input className='form-control' {...email} placeholder='Enter email' />
          {email.touched && email.error && <div className='error'>{email.error}</div>}        
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input className='form-control' {...password} type='password' placeholder='Enter password' />
          {password.touched && password.error && <div className='error'>{password.error}</div>}
        </fieldset>
        <fieldset className='form-group'>
          <label>Confirm Password:</label>
          <input className='form-control' {...passwordConfirm} type='password' placeholder='Enter password again' />
          {passwordConfirm.touched && passwordConfirm.error && <div className='error'>{passwordConfirm.error}</div>}          
        </fieldset>
        {this.renderAlert()}
        
      );
      <Test />
      {/* <button action='submit' className='btn btn-primary'>Upload Photo!</button> */}
      <button action='submit' className='btn btn-primary'>Sign up!</button>
        
        
      </form>
      </div>
      
</div>
    )}
};
function validate (formProps) {
  const errors = {};
  if (!formProps.email) {
    errors.email = 'Please enter an email';
  };
  if (!formProps.password) {
    errors.password = 'Please enter a password';
  };
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  };
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  };
  return errors;
}
function mapStateToProps (state) {
  return { errorMessage: state.auth.error };
};
export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);
