import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./App.css";
import "./Temperature.css";

export default function Temperature(props) {
  let [tempUnit, setTempUnit] = useState("celsius");

  function toCelsius(event) {
    event.preventDefault();
    setTempUnit("celsius");
  }

  function toFahrenheit(event) {
    event.preventDefault();
    setTempUnit("fahrenheit");
  }

  if (tempUnit === "celsius") {
    return (
      <div className="Temperature wrapper">
        <span className="temp">{props.celsius}</span>

        <span className="unit">
          °C |{" "}
          <a href="/" id="fah" onClick={toFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="Temperature wrapper">
        <span className="temp"> {fahrenheit}</span>
        <span className="unit">
          <a href="#" id="cen" onClick={toCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
