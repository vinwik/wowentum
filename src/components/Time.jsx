import React, { useState, useEffect } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(tick, 1000);
    return () => {
      clearInterval(tick);
    };
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  const hours = time.getHours();
  const minutes = time.getMinutes();

  const greetings = () => {
    if (hours < 12) {
      return "good morning ";
    } else if (hours < 17) {
      return "good afternoon ";
    } else {
      return "good evening ";
    }
  };

  return (
    <div className="time">
      <h1 className="time__clock">
        <span>{hours < 10 ? "0" + hours : hours}</span>
        <span className="time__clock-colon">:</span>
        <span>{minutes < 10 ? "0" + minutes : minutes}</span>
      </h1>
      <h2 className="time__greetings">
        <span>{greetings()}</span>
        <span>vincent</span>
      </h2>
    </div>
  );
}

export default Time;
