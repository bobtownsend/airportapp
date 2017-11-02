import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { DefaultPlayer as Video } from "react-html5video";
import * as actions from "../actions";
import PropTypes from "prop-types";
import profile from "./profile";
import '../css/style.css';
import fontAwesome from 'react-fontawesome';
import { Grid, Row, Col } from 'react-bootstrap';
import team1 from '../images/team/team-1.jpg';
import team2 from '../images/team/team-2.jpg';
import team3 from '../images/team/team-3.jpg';
import team4 from '../images/team/team-4.jpg';
import team5 from '../images/team/team-5.jpg';

class Homepage extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.props.fetchMessage();
  }

  renderLinks() {
    if (this.props.authenticated) {
      // show a link for user to go to Dashboard or Sign Out
      return [
        <li className="nav-item" key={1}>
          {this.props.message}
        </li>,
        <li className="nav-item" key={2}>
          <Link id="navLink" className="btn btn-lg btn-primary" to="/dashboard">
            Dashboard
          </Link>
        </li>,
        <li className="nav-item" key={3}>
          <Link id="navLink" className="btn btn-lg btn-primary" to="/signout">
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
    return (

      /* NAVBAR */

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

  
  <div id="header" className="header">
  <div class="container">
      <div className="row">
      <div className="col-lg-6 col-md-6">
          <h1>Bringing kids hope!</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesettin industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.</p>
          <button className="btn btn-lg btn-primary">About Us</button>
                         
      </div>
      
    </div>
  </div>
</div>
             


<div id="services" className="services">
 <div className="container">
      <h2>Our Services</h2>
      <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
      <div className="row">
          <div className="col-lg-3 col-md-3">
              <i className="fa fa-desktop" aria-hidden="true"></i>
              <h4>Service 1</h4>
              <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
          </div>
          <div className="col-lg-3 col-md-3">
              <i className="fa fa-users" aria-hidden="true"></i>
              <h4>Service 2</h4>
              <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
      </div>
          <div className="col-lg-3 col-md-3">
              <i className="fa fa-calendar" aria-hidden="true"></i>
              <h4>Service 3</h4>
              <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
          </div>
          <div className="col-lg-3 col-md-3">
              <i className="fa fa-cog" aria-hidden="true"></i>
              <h4>Service 4</h4>
              <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p> 
          </div>                
      </div>
  </div>
</div>

<div id="events" className="events">
<div className="container">
    <div className="row">
        <h2>Up Coming Events</h2>
        <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
        <div className="col-lg-3 col-md-3">
            <div className="columns">
                <h4>Events</h4>
                <h1>Title</h1>
                <b></b>
                <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
                <hr/>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <button className="btn btn-md btn-primary">More info</button>
            </div>
        </div>
        <div className="col-lg-3 col-md-3">
            <div className="columns">
                <h4>Events</h4>
                <h1>Title</h1>
                <b></b>
                <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
                <hr/>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <button className="btn btn-md btn-primary">More info</button>
            </div>
        </div>
        <div className="col-lg-3 col-md-3">
            <div className="columns">
                <h4>Events</h4>
                <h1>Title</h1>
                <b></b>
                <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
                <hr/>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <button className="btn btn-md btn-primary">More info</button>
            </div>
        </div>
        <div className="col-lg-3 col-md-3">
            <div className="columns">
                <h4>Events</h4>
                <h1>Title</h1>
                <b></b>
                <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
                <hr/>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <li>Dummy list goes here</li>
                <button className="btn btn-md btn-primary">More info</button>
            </div>
        </div>
    </div>
  </div>
</div>

<div id="team" className="team">
<div className="container">
    <div className="row">
        <h2>Meet The Team</h2>
        <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
        <Row className='show-grid'>
        <Col sm={6} md={4}><br />
            <img src={team1} className="img-circle" alt=""/>
            <h4>Ray Roman</h4>
            <b>Front End</b>
            <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
            <a href="https://www.facebook.com/rayroman0809"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/rayroman0809"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/rayroman0809/?hl=en"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/ray-roman-b9856123/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="https://github.com/rayroman0809"><i className="fa fa-github" aria-hidden="true"></i></a>
        </Col>
        <Col sm={6} md={4}><br />
            <img src={team2} className="img-circle" alt=""/>
            <h4>Krysta Jones</h4>
            <b>Front End</b>
            <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
        </Col>
        <Col sm={6} md={4}><br />
            <img src={team3} className="img-circle" alt=""/>
            <h4>Lovie Bates</h4>
            <b>Front End</b>
            <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
            
        </Col>
        </Row>
        <Row>
        <Col sm={6} md={4} mdOffset={2}><br />
            <img src={team4} className="img-circle" alt=""/>
            <h4>Tyler Miller</h4>
            <b>Back End</b>
            <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
            
        </Col>
        <Col sm={6} md={4}><br />
            <img src={team5} className="img-circle" alt=""/>
            <h4>Adrian Hingson</h4>
            <b>Back End</b>
            <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
            
        </Col>
        </Row>
     
    </div>
    
</div>
</div>

<div id="partners" className="partners">
<div className="container">
    <div className="row">
        <h2>Our Partners</h2>
        <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
        <div className="col-lg-3 col-md-3">
        <li><img src="images/clients/client1.png" alt=""/></li>
        </div>
        <div className="col-lg-3 col-md-3">
        <li><img src="images/clients/client2.png" alt=""/></li>
        </div>
        <div className="col-lg-3 col-md-3">
        <li><img src="images/clients/client3.png" alt=""/></li>
        </div>
        <div className="col-lg-3 col-md-3">
        <li><img src="images/clients/client4.png" alt=""/></li>
        </div>    
    </div>
</div>
<button id="volunteerbtn" className="btn btn-md btn-primary">More info</button>  
</div>

<div id="contact" className="contact">
<div className="container">
    <div className="row">
        <h2>Contact</h2>
        <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
        <div className="col-lg-6 col-md-6">
            <div className="input-group input-group-lg">
                <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-user" aria-hidden="true"></i>
                </span>
                <input type="text" className="form-control" aria-describedby="sizing-addon1" placeholder="Full Name"/>
            </div>
            <div className="input-group input-group-lg">
                <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <input type="text" className="form-control" aria-describedby="sizing-addon1" placeholder="Email Address"/>
            </div>
            <div className="input-group input-group-lg">
                <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <input type="text" className="form-control" aria-describedby="sizing-addon1" placeholder="Phone Number"/>
            </div>
      </div>
        <div className="col-lg-6 col-md-6">
            <div class="input-group">
                <textarea name="" id="" cols="80" rows="6" className="form-control"></textarea>
            </div>
            <button className="btn btn-md">Submit your Message</button>
        </div>
    </div>
</div>
</div>

        <div className="footer" className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <h4>Contact Us</h4>
                    <p><i className="fa fa-home" aria-hidden="true"></i> 8444 N. 90th St. #110 Scottsdale, AZ 85258</p>
                    <p><i className="fa fa-envelope" aria-hidden="true"></i> info@codercamps.com</p>
                    <p><i className="fa fa-phone" aria-hidden="true"></i>  +1 855 755 2267</p>
                    <p><i className="fa fa-globe" aria-hidden="true"></i>  www.codercamps.com</p>
                </div>
                <div className="col-lg-4 col-md-4">
                    <h4>About</h4>
                    <p><i className="fa fa-square-o" aria-hidden="true"></i> About Us</p>
                    <p><i className="fa fa-square-o" aria-hidden="true"></i> Privacy</p>
                    <p><i className="fa fa-square-o" aria-hidden="true"></i> Term & Conditions</p>
                </div>
                <div className="col-lg-4 col-md-4">
                   <h4>Stay In Touch</h4>
                   <i className="social fa fa-facebook" aria-hidden="true"></i>
                   <i className="social fa fa-twitter" aria-hidden="true"></i>
                   <i className="social fa fa-instagram" aria-hidden="true"></i>
                   <i className="social fa fa-linkedin" aria-hidden="true"></i>
                   <i className="social fa fa-youtube" aria-hidden="true"></i>
                   <i className="social fa fa-github" aria-hidden="true"></i><br/>
                   <input type="email" placeholder="    Subsribe For Updates"/><button className="btn btn-md btn-primary">Subscribe</button>
                </div>
            </div>
        </div>
    </div>

    </div>

    
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    message: state.auth.message
  };
}

export default connect(mapStateToProps, actions)(Homepage);
