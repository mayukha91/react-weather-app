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
          °C |
          <a href="/" id="fah" onClick={toFahrenheit}>
            °F
          </a>
        </small>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="Temperature">
        <strong> {fahrenheit}</strong>
        <small>
          <a href="#" id="cen" onClick={toCelsius}>
            °C
          </a>{" "}
          | °F
        </small>
      </div>
    );
  }
}
