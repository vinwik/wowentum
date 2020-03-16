import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "../Calendar.css";

import { Button } from "@material-ui/core";

function Today() {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setInterval(tick, 1000);
    return () => {
      clearInterval(tick);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  const options = { weekday: "long", day: "numeric", month: "long" };

  const today = date.toLocaleDateString("en-GB", options);

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="today">
      <Button
        onClick={() => {
          toggleCalendar();
        }}
        style={buttonReset}
      >
        <h4 className="date">{today}</h4>
      </Button>
      <Calendar
        onClickDay={() => {
          console.log("day clicked");
        }}
        className={`calendar ${isOpen ? "opened" : ""}`}
      />
    </div>
  );
}

export default Today;

const buttonReset = {
  lineHeight: "initial",
  textTransform: "none",
  fontSize: "inherit",
  color: "inherit",
  textShadow: "0 0 10px #666"
};
