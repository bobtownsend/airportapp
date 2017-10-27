import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import events from "../events";

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
  render() {
    return (
      <div>
        <BigCalendar
          {...this.props}
          events={events}
          views={allViews}
          step={60}
          defaultDate={new Date()}
        />
      </div>
    );
  }
}

export default Calendar;
