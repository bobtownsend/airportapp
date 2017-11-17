import React, { Component } from "react";
import AddToCalendar from "react-add-to-calendar";

class AddtoCalendar extends Component {
  static displayName = "Event";
  state = {
    event: {
      title: " ",
      description: " ",
      location: " ",
      startTime: " ",
      endTime: " "
    }
  };

  render() {
    return (
      <div>
        <AddToCalendar event={this.state.event} />;
      </div>
    );
  }
}

export default AddtoCalendar;
