import React, { Component } from "react";

import Time from "./Time";
import Weather from "./Weather";
import Today from "./Today";
import SearchBar from "./SearchBar";
import Favourites from "./Favourites";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";

export class App extends Component {
  state = {
    weather: {
      temperature: 7,
      summaryCurrent: "Rain",
      icon: "RAIN",
      sunriseTime: 7,
      sunsetTime: 18,
      summaryDaily: "Rain throughout the day",
      temperatureHigh: 12,
      temperatureLow: 4
    },
    background: "default"
  };

  componentDidMount() {
    const json = localStorage.getItem("background");
    if (json != null) {
      const background = JSON.parse(json);
      this.setState({ background });
      console.log("json set");
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const API_KEY = "f67489d1d35960a6ce55506890cc9b1a";

        const noProxy = "";

        const apiCall = async () => {
          const response = await fetch(
            `${noProxy}https://api.darksky.net/forecast/${API_KEY}/${lat},${long}?units=si&exclude=minutely,hourly,alerts,flags`
          );
          const data = await response.json();
          console.log(data);

          this.setState(() => {
            return {
              weather: {
                temperature: Math.round(data.currently.temperature),
                summaryCurrent: data.currently.summary,
                icon: data.currently.icon.replace(/-/g, "_").toUpperCase(),
                sunriseTime: data.daily.data[0].sunriseTime,
                sunsetTime: data.daily.data[0].sunsetTime,
                summaryDaily: data.daily.data[0].summary,
                temperatureHigh: Math.round(data.daily.data[0].temperatureHigh),
                temperatureLow: Math.round(data.daily.data[0].temperatureLow)
              }
            };
          });
          this.getBackground();
        };
        apiCall();
        setInterval(apiCall, 600000);
      });
    }
  }

  //SET BACKGROUND TO LOCAL STORAGE
  componentDidUpdate = () => {
    const background = JSON.stringify(this.state.background);
    localStorage.setItem("background", background);
    console.log("json parsed");
  };

  getBackground = () => {
    const { sunriseTime, sunsetTime } = this.state.weather;

    let time = new Date();
    let sunrise = new Date(sunriseTime * 1000);
    let sunset = new Date(sunsetTime * 1000);

    let hours = time.getHours();
    let sunriseHours = sunrise.getHours();
    let sunsetHours = sunset.getHours();
    if (hours > sunriseHours && hours < sunriseHours + 3) {
      return this.setState({ background: "dawn" });
    } else if (hours >= sunriseHours + 2 && hours < sunsetHours - 1) {
      return this.setState({ background: "day" });
    } else if (hours >= sunsetHours - 1 && hours < sunsetHours + 1) {
      return this.setState({ background: "dusk" });
    } else {
      return this.setState({ background: "night" });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.background !== "default" && (
          <div
            className="App"
            style={{
              backgroundImage: `url('./assets/${this.state.background}.jpg')`
            }}
          >
            <div className="top">
              <Today />
              {this.state.weather.icon && (
                <Weather weather={this.state.weather} />
              )}
            </div>
            <div className="center">
              <Time />
              <SearchBar />
              <Favourites />
            </div>
            <div className="bottom">
              <Button style={buttonReset} disabled="true">
                <FontAwesomeIcon icon={faCog} size="1x" className="svg-icons" />
              </Button>
              <Button style={buttonReset} disabled="true">
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  size="1x"
                  className="svg-icons"
                />
              </Button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;

const buttonReset = {
  lineHeight: "initial",
  textTransform: "none",
  fontSize: "inherit",
  color: "inherit",
  textShadow: "0 0 10px #666"
};
