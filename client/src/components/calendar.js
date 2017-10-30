import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import eventsCalendar from "./eventsCalendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class mycalendar extends Component {
  render() {
    return (
      <BigCalendar
        {...this.props}
        events={eventsCalendar}
        views={allViews}
        step={60}
        defaultDate={new Date(2017, 9, 27)}
      />
    );
  }
}

export default mycalendar;
