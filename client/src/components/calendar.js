import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import eventsCalendar from "./eventsCalendar";
import moment from "moment";
import AddtoCalendar from "./addCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Popup from "react-popup";
// import "../css/style.css";
import Footer from "./footer";
import "./calendar.css";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Mycalendar extends Component {
  render() {
    return (
      <div className="calendar  ">
        <BigCalendar
          {...this.props}
          Popup
          selectable
          events={eventsCalendar}
          step={60}
          style={{ height: "150vh", padding: "100px" }}
          views={{ month: true }}
          defaultDate={new Date()}
          onSelectEvent={event =>
            Popup.alert(<AddtoCalendar />, event.title + "    " + event.desc)}
        />

        <Popup
          className="mm-popup"
          btnClass="mm-popup__btn"
          closeBtn={true}
          closeHtml={null}
          defaultOk="close"
          wildClasses={false}
          closeOnOutsideClick={true}/>
          
        <div>
          <Footer />
        </div>
        
      </div>
    );
  }
}

export default Mycalendar;
