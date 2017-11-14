import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from "../footer";

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
      localStorage.setItem('userEmail', this.props.values.email);
    };
  };

  handleFormSubmit (event) {
      event.preventDefault();

      let email = this.refs.email.value;
      let password = this.refs.password.value;
    // action creator dispatching creditionals to validate on server
    this.props.signinUser(email, password );
    console.log("New USER SIGNED IN");
    console.log( email )
    console.log( password )
  };
  // handleChange(e){
    // let tempUser=this.state.profile;
    // tempUser[e.target.name]=e.target.value;
    // this.setState({
      // user:tempUser
    // });
  // };


  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    };
  };
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
    const { handleSubmit, fields: { email, password }} = this.props;
    return (

  

      <div className='tg-login__wrapper'>
        {/* <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}> */}
        <form >
          <fieldset className='form-group'>
            <label>THIS IS A NEWWWWW TEST ALSO </label>
            <label>Email:</label>
            <input ref="email" className='form-control' placeholder='Enter email' />
          </fieldset>
          <fieldset className='form-group'>
            <label>Password:</label>
            <input  ref="password" type='password' className='form-control' placeholder='Enter password'  />
              {/* {...password} */}
          </fieldset>
          {this.renderAlert()}
          <button type='submit' className='btn btn-primary' onClick={this.handleFormSubmit.bind(this)}>Sign in</button>
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
