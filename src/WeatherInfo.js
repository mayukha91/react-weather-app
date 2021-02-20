import React from "react";
import CurrentDate from "./CurrentDate";
import App from "./App";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <div className="row ">
            <div className="col">
              <CurrentDate date={props.data.date} />
            </div>
          </div>
        </li>
        <li>
          <div className="row">
            <Temperature celsius={props.data.temperature} />

            <div className="col-6 imgDesc">
              <div className="row img1">
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
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
