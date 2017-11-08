import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { DefaultPlayer as Video } from "react-html5video";
import * as actions from "../actions";
import PropTypes from "prop-types";
import profile from "./profile";
import privacy from "./privacy";
import '../css/style.css';
import fontAwesome from 'react-fontawesome';
import { Grid, Row, Col } from 'react-bootstrap';
import team1 from '../images/team/team-1.jpg';
import team2 from '../images/team/team-2.jpg';
import team3 from '../images/team/team-3.jpg';
import team4 from '../images/team/team-4.jpg';
import team5 from '../images/team/team-5.jpg';
import Footer from './footer';

class Homepage extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.props.fetchMessage();
  }

  

  render() {
    return (
      
        <div>
  
  
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
             

<div id="ourservices" className="ourservices">
 <div className="container">
      <h2>Our Services</h2>
      <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
      <div className="col-lg-6 col-md-6">
      <h2>Text goes here</h2>
      <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
      </div>
      <div className="col-lg-6 col-md-6">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" className="video" src="https://www.youtube.com/embed/V4w5R7_80G0" frameborder="0" allowfullscreen></iframe>
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
                <h1>Nov. 8th</h1>
                <b></b>
                <hr/>
                <p>Startup weekend PHX Speed Networking at 6pm @Galvanize Phoenix</p>
                <a href="calendar" className="btn btn-md btn-primary">More info</a>
            </div>
        </div>
        <div className="col-lg-3 col-md-3">
            <div className="columns">
                <h1>Nov. 8th</h1>
                <b></b>
                <hr/>
                <p>Solving common DBA problems with uncommon uses of R at 6pm @Ice AZ</p>
                <a href="calendar" className="btn btn-md btn-primary">More info</a>
            </div>
        </div>
        <div className="col-lg-3 col-md-3">
            <div className="columns">
                <h1>Nov. 8th</h1>
                <b></b>
                <hr/>
                <p>Algorithm Economy Meetup at 5:30pm @Culinary Dropout Phoenix Cloud</p>
                <a href="calendar" className="btn btn-md btn-primary">More info</a>
            </div>
        </div>
        <div className="col-lg-3 col-md-3">
            <div className="columns">
                <h1>Nov. 8th</h1>
                <b></b>
                <hr/>
                <p>Beginner Developer: Lighting Talks at 6:30pm @Godaddy Tempe ReactJS</p>
                <a href="calendar" className="btn btn-md btn-primary">More info</a>
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
        
        <Col sm={3} md={3}><br />
            <img src={team1} className="img-circle" alt=""/>
            <h4>Ray Roman</h4>
            <b>Front End</b>
            <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
            <a href="https://www.facebook.com/rayroman0809"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/rayroman0809/?hl=en"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/ray-roman-b9856123/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="https://github.com/rayroman0809"><i className="fa fa-github" aria-hidden="true"></i></a>
        </Col>
        <Col sm={3} md={3}><br />
            <img src={team2} className="img-circle" alt=""/>
            <h4>Krysta Jones</h4>
            <b>Front End</b>
            <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
        </Col>
        <Col sm={3} md={3}><br />
            <img src={team3} className="img-circle" alt=""/>
            <h4>Lovie Bates</h4>
            <b>Front End</b>
            <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
            
        </Col>
        
        <Col sm={6} md={4} mdOffset={2}><br />
            <img src={team4} className="img-circle" alt=""/>
            <h4>Tyler Miller</h4>
            <b>Back End</b>
            <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
            
        </Col>
     
    </div>
    
</div>
</div>

<div id="partners" className="partners">
<div className="container">
    <div className="row">
    <Row className='show-grid'>
        <h2>Our Partners</h2>
        <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
        <div className="col-lg-3 col-md-3">
        <li><img src='https://i.imgur.com/fe0T4nw.png' /></li>
        </div>
        <div className="col-lg-3 col-md-3">
        <li><img src='https://i.imgur.com/6onyRkH.png' /></li>
        </div>
        <div className="col-lg-3 col-md-3">
        <li><img src='https://i.imgur.com/P1ZhohF.png' /></li>
        </div>
        <div className="col-lg-3 col-md-3">
        <li><img src='https://i.imgur.com/kccwdNi.png' /></li>
        </div>    
    </Row>
    </div>
</div>
<button id="volunteerbtn" className="btn btn-md btn-primary">More info</button>  
</div>

<div id="contact" className="contact">
    <div className="container">
        <div className="row">

            <h2>Contact</h2>
            <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>

<form
    action="mailto:rayroman0809@gmail.com"
    method="post"
    enctype="multipart/form-data"
    name="EmailThisForm">
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
            <button className="btn btn-md" input type="submit" value="EmailThisForm">Submit your Message</button>
        </div>
</form>
    </div>
</div>

</div>

<Footer/>   
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