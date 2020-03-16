import React, { useState } from "react";

import WeatherDetails from "./WeatherDetails";
import ReactAnimatedWeather from "react-animated-weather";

import { Button } from "@material-ui/core";

const defaults = {
  icon: "RAIN",
  color: "#fff",
  size: 32,
  animate: true
};

function Weather({ weather }) {
  const { temperature, icon } = weather;

  const [isOpen, setIsOpen] = useState(false);

  const toggleWeather = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        onClick={() => {
          toggleWeather();
        }}
        style={buttonReset}
      >
        <h3 className="weather">
          <span>
            <ReactAnimatedWeather
              icon={icon}
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />
          </span>
          <span className="weather-temp">{temperature}</span>
          <span className="weather-deg">&deg;</span>
        </h3>
      </Button>
      <WeatherDetails weather={weather} isOpen={isOpen} />
    </div>
  );
}

export default Weather;

const buttonReset = {
  lineHeight: "initial",
  textTransform: "none",
  fontSize: "inherit",
  color: "inherit",
  textShadow: "0 0 10px #666"
};
