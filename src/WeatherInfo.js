import React from "react";
import CurrentDate from "./CurrentDate";
import App from "./App";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  let icon1 = props.data.icon;
  console.log(icon1);
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
    </div>
  );
}
