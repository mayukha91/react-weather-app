import React from "react";
import CurrentDate from "./CurrentDate";

import Temperature from "./Temperature";
import WeatherDescription from "./WeatherDescription";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  let icon1 = props.data.icon;

  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <div className="row">
            <div className="col">
              <CurrentDate date={props.data.date} />
            </div>
          </div>
        </li>
        <li>
          <div className="row">
            <div className="col-6">
              <Temperature celsius={props.data.temperature} />
            </div>
            <div className="col-6 imgDesc">
              <div className="row img1">
                <img
                  src={`https://openweathermap.org/img/wn/${icon1}@2x.png`}
                  alt=" "
                  id="icon"
                />
              </div>
              <div className="row sub1 text-capitalize">
                {props.data.description}
              </div>
            </div>
          </div>
        </li>
      </ul>
      <WeatherDescription
        humidity={props.data.humidity}
        wind={props.data.wind}
        visibility={props.data.visibility}
      />
    </div>
  );
}
