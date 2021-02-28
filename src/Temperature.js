import React, { useState } from "react";

import "./Temperature.css";

export default function Temperature(props) {
  function toCelsius(event) {
    event.preventDefault();
    props.setTempUnit("celsius");
  }

  function toFahrenheit(event) {
    event.preventDefault();
    props.setTempUnit("fahrenheit");
  }

  if (props.tempUnit === "celsius") {
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
