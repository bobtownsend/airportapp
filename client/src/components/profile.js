import React from "react";
import { Link } from "react-router-dom";

class profile extends React.Component {
  constructor(props) {
    super(props);
  }
  renderLinks() {
    if (this.props.authenticated) {
      // show a link for user to go to Dashboard or Sign Out
      return [
        <li className="nav-item" key={1}>
          {this.props.message}
        </li>,
        <li className="nav-item" key={2}>
          <Link className="btn btn-default tg-login__btn" to="/dashboard">
            Dashboard
          </Link>
        </li>,
        <li className="nav-item" key={3}>
          <Link className="nav-link" to="/signout">
            Sign Out
          </Link>
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
  render() {
    console.log(this.props);
    return (
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
                   </ul>
            
            
             
           </div>
           
           
          </div>
      </div>
      <div>
      {this.renderLinks()}
      <form>
      <h2 className="Name">Full Name</h2>
      <input type="text" placeholder="name"/>
      <h2 className="Email">Your email</h2>
      <input type="text" placeholder="email"/>
      <h2 className="PhoneNumber">Your Phone Number</h2>
      <input type="text" placeholder="phonenumber"/>
      <button action= "SUBMIT" className ="btn btn-primary">submit </button>
      </form>
      </div>
  </div>
    
  
  
    );
  }
}

export default profile;

// <h1 className="Name">{this.props.person.name}</h1>
// <h2 className="Email">{this.props.person.email}</h2>
// <h3 className="PhoneNumber">{this.props.person.phone}</h3>
