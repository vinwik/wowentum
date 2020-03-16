import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const defaults = {
  icon: "RAIN",
  color: "#666",
  size: 125,
  animate: true
};

const WeatherDetails = ({ weather, isOpen }) => {
  const {
    icon,
    summaryCurrent,
    temperature,
    summaryDaily,
    temperatureHigh,
    temperatureLow
  } = weather;

  return (
    <div className={`weather-details ${isOpen ? "opened" : ""}`}>
      <p className="weather-details__day">Today</p>
      <ReactAnimatedWeather
        icon={icon}
        color={icon === "CLEAR_DAY" ? "goldenrod" : defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />
      <h3 className="weather-details__summary">
        <span>{summaryCurrent}</span>
        <span>{temperature}&deg;</span>
      </h3>
      <p>{summaryDaily}</p>
      <div className="weather-details__temp-minmax">
        <div>
          <h5>MIN.</h5>
          <p>
            <span>{temperatureLow}</span>
            <span>&deg;</span>
          </p>
        </div>
        <div>
          <h5>MAX.</h5>
          <p>
            <span>{temperatureHigh}</span>
            <span>&deg;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
