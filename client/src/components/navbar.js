import React from 'react';
import Signin from './auth/signin'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class Navbar extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };
  componentWillMount(){
        //Refresh page to re-render navbar
        this.context.router.refresh;
  }
    renderLinks () {
      //        localStorage.setItem('authenticated', true);
      let  authenticated = localStorage.getItem('authenticated');
      console.log(authenticated);
        if (!!authenticated) {
          // show a link for user to go to Dashboard or Sign Out
          return [
 
            <li className='nav-item'key={1}>
              <Link className='btn btn-primary' to='/profile'>Dashboard</Link>
            </li>
            ,
            <li className='nav-item' key={2}>
              <Link className='btn btn-primary' to='/signout'>Sign Out</Link>
            </li>
          ];
        } else {
          // show a link for user to Sign In or Sign Up
          return [
            <li className="nav-item">
            <Link id="navLink" className="btn btn-primary" to="/signin" key={1}>
              Sign In
            </Link>
          </li>,
          <li className="nav-item" key={2}>
            <Link id="navLink" className="btn btn-primary" to="/signup">
              Sign Up
            </Link>
          </li>
        ];
      }
    }
    render() {
    return (

        

<nav id="myNavbar" className="navbar navbar-default navbar-fixed-top" role="navigation">
<div className="container">

    <div className="navbar-header">
        
       <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        
        <a href="/" className="navbar-brand">Foster The Future</a>
        
    </div>
    
    <div className="navbar-collapse collapse">
    
        <ul className="nav navbar-nav navbar-right">
            {/* I CHANGED THIS */}
            <li><a href="/#ourservices">our services</a></li>
            <li><a href="/#events">events</a></li>
            <li><a href="/#team">team</a></li>
            <li><a href="/#partners">partners</a></li>
            <li><a href="/#contact">contact</a></li>
             
            {this.renderLinks()}
       </ul>
     
    </div>
</div>
</nav>
    );
}
}

export default Navbar;


