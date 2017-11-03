import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import eventsCalendar from "./eventsCalendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import "../css/style.css";
import Footer from "./footer";


BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class mycalendar extends Component {
  render() {
    return (
      <div className='calendar  '>
      <BigCalendar
        {...this.props}
        events={eventsCalendar}
        views={{month:true}}
        step={60}
        defaultDate={new Date(2017, 9, 27)}
  
        style={{ height: "150vh", padding: "100px" }}
        
      />
      <div><Footer /></div>
      </div>
    );
  }
}

export default mycalendar;
