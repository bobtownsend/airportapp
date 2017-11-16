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
    constructor(props){
        super(props);
    }
    state ={
        contactSubmision: false,
        sent: false
    }
  static contextTypes = {
    router: PropTypes.object
  };

  
  componentDidMount() {
    this.props.fetchMessage();
  }

  contactSubmit = () =>{
    let email = this.refs.email.value;
    let fullName = this.refs.fullName.value;
    let phoneNumber = this.refs.phoneNumber.value;
    let message = this.refs.message.value;
    let subject = this.refs.subject.value;
   this.props.contactSubmit(email, fullName, phoneNumber, subject, message);
this.setState({sent: true, contactSubmision: true});
    console.log('CONTACT FORM SUBMITED');

  }

  render() {



    return (
      
<div>
  <div id="header" className="header">
    <div className="container">
      <p className="text-center" className="largeImageText"></p>
    </div>
  </div>
             

<div id="ourservices" className="ourservices">
 <div className="container">
      <h2>Our Services</h2>
      <p></p>
      <div className="col-lg-6 col-md-6">
      <h2>about us</h2>
      <p>Foster The Future is a care system in which a minor has been placed outside of the foster system and gets them ready for a career.</p>
      </div>
      <div className="your-centered-div" className="col-lg-6 col-md-6">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" className="video" src="https://www.youtube.com/embed/V4w5R7_80G0" frameBorder="0" allowFullScreen></iframe>
        </div>
        </div>
        </div>
     
  </div>

<div id="events" className="events">
<div className="container">
    <div className="row">
        <h2>Up Coming Events</h2>
        <p>Check out our calendar of featured events in the listings below, plus get a full list of upcoming shows at our on our calendar page</p>
        <div className="col-lg-3 col-md-3">
            <div className="columns">
                <h1>Nov. 8th</h1>
                <b></b>
                <hr/>
                <p>Startup weekend PHX Speed Networking at 6pm @Galvanize Phoenix</p>
                <a href="calendar" className="btn btn-md btn-primary calendarButton">More info</a>
            </div>
        </div>
        <div className="col-lg-3 col-md-3">
            <div className="columns">
                <h1>Nov. 8th</h1>
                <b></b>
                <hr/>
                <p>Solving common DBA problems with uncommon uses of R at 6pm @Ice AZ</p>
                <a href="calendar" className="btn btn-md btn-primary calendarButton">More info</a>
            </div>
        </div>
        <div className="col-lg-3 col-md-3">
            <div className="columns">
                <h1>Nov. 8th</h1>
                <b></b>
                <hr/>
                <p>Algorithm Economy Meetup at 5:30pm @Culinary Dropout Phoenix Cloud</p>
                <a href="calendar" className="btn btn-md btn-primary calendarButton">More info</a>
            </div>
        </div>
        <div className="col-lg-3 col-md-3">
            <div className="columns">
                <h1>Nov. 8th</h1>
                <b></b>
                <hr/>
                <p>Beginner Developer: Lighting Talks at 6:30pm @Godaddy Tempe ReactJS</p>
                <a href="calendar" className="btn btn-md btn-primary calendarButton">More info</a>
            </div>
        </div>
    </div>
  </div>
</div>

<div id="team" className="team">
<div className="container">
    <div className="row">
        <h2>Meet The Team</h2>
        <p>We’re a team of 4 creative professionals who take pride in getting the job done right and have fun doing it.</p>
        
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
            <a href="https://www.facebook.com/krysta.moore.16"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/kkaye1215/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="www.linkedin.com/in/krystakayejones"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="https://github.com/kkaye85"><i className="fa fa-github" aria-hidden="true"></i></a>
        </Col>
        <Col sm={3} md={3}><br />
            <img src={team3} className="img-circle" alt=""/>
            <h4>Lovie Bates</h4>
            <b>Front End</b>
            <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
            <a href="https://www.facebook.com/lovie.bates"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/loviedrives/?hl=en"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/lovie-bates-771068148/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="https://github.com/loviedrives"><i className="fa fa-github" aria-hidden="true"></i></a>
        </Col>
        <Col sm={3} md={3}><br />
            <img src={team4} className="img-circle" alt=""/>
            <h4>Tyler Miller</h4>
            <b>Back End</b>
            <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
            <a href="https://www.facebook.com/profile.php?id=100019632854480"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/wirebasket/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/tyler-miller-54a024147/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="https://github.com/Wirebasket"><i className="fa fa-github" aria-hidden="true"></i></a>
        </Col>
     
    </div>
    
</div>
</div>

<div id="partners" className="partners">
<div className="container">
    <div className="row">
    <Row className='show-grid'>
        <h2>Our Partners</h2>
        <div className="col-lg-3 col-md-3">
        <li><img src='https://i.imgur.com/fe0T4nw.png'/></li>
        </div>
        <div className="col-lg-3 col-md-3">
        <li><a target="_blank" href='http://www.arizonansforchildren.org/'><img className="client2" src='https://i.imgur.com/IX3vf8y.png' /></a></li>
        </div>
        <div className="col-lg-3 col-md-3">
        <li><a target="_blank" href='https://arizonaatwork.com'><img src='https://i.imgur.com/01YlgMf.png'/></a></li>
        </div>
        <div className="col-lg-3 col-md-3">
        <li><a target="_blank" href='https://www.codercamps.com'><img className="client5" src='https://i.imgur.com/kccwdNi.png'/></a></li>
        </div>    
    </Row>
    </div>
</div>
</div>

<div id="contact" className="contact">
    <div className="container">
        <div className="row">

            <h2>Contact</h2>
            <p>Got a question? Drop us an email.</p>


<form>
        <div className="col-lg-6 col-md-6">
            <div className="input-group input-group-lg">
                <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-user" aria-hidden="true"></i>
                </span>
                <input type="text" ref="fullName" className="form-control" aria-describedby="sizing-addon1" placeholder="Full Name"/>
            </div>
            <div className="input-group input-group-lg">
                <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <input type="text" ref="email" className="form-control" aria-describedby="sizing-addon1" placeholder="Email Address"/>
            </div>
            <div className="input-group input-group-lg">
                <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <input type="text" ref="phoneNumber" className="form-control" aria-describedby="sizing-addon1" placeholder="Phone Number"/>
            </div>
       </div>
       <div className="input-group input-group-lg">
            <label> Subject</label>
                <input type="text" ref="subject" className="form-control" aria-describedby="sizing-addon1" placeholder="Subject"/>
            
       </div>
        <div className="col-lg-6 col-md-6">
            <div className="input-group">
                <textarea ref="message" name="" id="" cols="80" rows="6" className="form-control"></textarea>
            </div>
            <button onClick={this.contactSubmit.bind(this)} className="btn btn-md" >Submit your Message</button>
        </div>
</form>
<br></br>
<br></br>
<br></br>
{/* I CHANGED THIS */}
{this.state.contactSubmision == true ? <p style={{'color': 'green', 'font-size': '18px'}}> Message Submitted Successfully </p>: <p></p>}
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