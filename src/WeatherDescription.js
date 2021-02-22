import React from "react";
import "./WeatherDescription.css";

export default function WeatherDescription(props) {
  return (
    <div className="WeatherDescription">
      <ul>
        <li>Humidity : {props.humidity}%</li> {"  "}|{"  "}
        {"  "}
        <li>Wind : {props.wind} km/hr</li>
        {"  "}
        {"  "}|{"  "}
        {"  "}
        <li> Visibility : {props.visibility} km/hr</li>
      </ul>
    </div>
  );
}
