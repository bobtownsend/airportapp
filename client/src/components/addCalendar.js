import React, { Component } from "react";
import AddToCalendar from "react-add-to-calendar";

class AddtoCalendar extends Component {
  render() {
    return (
      <div>
        <AddToCalendar buttonDropdown="Add to calendar" />
      </div>
    );
  }
}

export default AddtoCalendar;
