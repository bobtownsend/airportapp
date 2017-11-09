import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import eventsCalendar from "./eventsCalendar";
import moment from "moment";
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
          onSelectEvent={event =>
            Popup.alert(
              "Phoenix Fam Fest ($15) 9am @ Phoenix Convention Center"
            )}
          events={eventsCalendar}
          views={{ month: true }}
          step={60}
          defaultDate={new Date()}
          style={{ height: "150vh", padding: "100px" }}
          {...this.props}
          onSelectEvent={event =>
            Popup.alert("Saturday Morning Open Hack 9am @ GoDaddy Tempe")}
          events={eventsCalendar}
          views={{ month: true }}
          step={60}
          defaultDate={new Date()}
          style={{ height: "150vh", padding: "100px" }}
          {...this.props}
          onSelectEvent={event => Popup.alert(event.desc, event.title)}
          events={eventsCalendar}
          views={{ month: true }}
          step={60}
          defaultDate={new Date()}
          style={{ height: "150vh", padding: "100px" }}
        />
        <Popup
          className="mm-popup"
          btnClass="mm-popup__btn"
          closeBtn={true}
          closeHtml={null}
          defaultOk="AddCalender"
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
