import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./App.css";

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
      <div className="Temperature">
        <strong> {props.celsius}</strong>

        <small>
          <span>°C </span>|
          <a href="/" id="fah" onClick={toFahrenheit}>
            <span className="fah">°F</span>
          </a>
        </small>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="Temperature">
        <strong> {fahrenheit}</strong>
        <small>
          <a href="#" id="cen" onClick={toCelsius}>
            <span>°C</span>
          </a>
          | <span className="fah">°F</span>
        </small>
      </div>
    );
  }
}
