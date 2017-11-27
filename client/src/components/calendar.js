import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import eventsCalendar from "./eventsCalendar";
import moment from "moment";
import AddtoCalendar from "react-add-to-calendar";
import datetime from "react-datetime";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Popup from "react-popup";
// import "../css/style.css";
import Footer from "./footer";
import "./calendar.css";
import axios from "axios";
import PropTypes from "prop-types";

const ROOT_URL = "http://localhost:8080/api/v1";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Mycalendar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    changedView: false
  };
  static contextTypes = {
    router: PropTypes.object
  };
  deleteEvent(event) {
    console.log(event);
    let email = localStorage.getItem("userEmail");
    console.log(email);
    axios
      .post(`${ROOT_URL}/removeFromCalendar`, { event, email })
      .then(response => {
        console.log("Event Removed was successful!");
      })
      .catch(err => {
        console.log(err);
      });
    this.context.router.history.push("/");
  }
  addEventToCalendar(event) {
    console.log(event);
    const userEmail = localStorage.getItem("userEmail");
    axios
      .post(`${ROOT_URL}/addToCalendar`, { event, userEmail })
      .then(response => {
        console.log("addEventToCalendar successful!");
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    console.log(this.props);
    if (!!this.props.userEvents) {
      var userEvents = this.props.userEvents;
    } else {
      var userEvents = eventsCalendar;
    }
    return (
      <div className="calendar  ">
        <BigCalendar
          {...this.props}
          Popup
          selectable
          events={userEvents}
          step={60}
          style={{ height: "150vh", padding: "100px" }}
          views={{ month: true }}
          defaultDate={new Date()}
          onSelectEvent={event => {
            if (this.props.isUser != true) {
              Popup.close();

              Popup.alert(
                <button
                  onClick={() => {
                    this.addEventToCalendar(event);
                    Popup.close();
                  }}
                >
                  Add Event
                </button>,
                event.title + "    " + event.desc + "   " + event.date
              );
            } else {
              Popup.close();
              Popup.alert(
                <button
                  onClick={() => {
                    this.deleteEvent(event);
                    Popup.close();
                    this.context.router.history.push("/profile");
                    window.location.reload();
                  }}
                >
                  Remove Event
                </button>,
                event.title + "    " + event.desc + "   " + event.date
              );
            }
          }}
        />

        <Popup
          className="mm-popup"
          btnClass="mm-popup__btn"
          closeBtn={true}
          closeHtml={null}
          defaultOk="close"
          wildClasses={false}
          closeOnOutsideClick={true}
        />

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Mycalendar;
