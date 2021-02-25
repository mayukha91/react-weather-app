import React, { useState } from "react";
import axios from "axios";
import "./NextFourDays.css";

export default function NextFourDays(props) {
  let [nextData, setNextData] = useState({ loaded: false });

  function handleResponse(response) {
    console.log(response.data);

    setNextData({
      loaded: true,
      day1: (response.data.daily[1].dt + response.data.timezone_offset) * 1000,
      day2: (response.data.daily[2].dt + response.data.timezone_offset) * 1000,
      day3: (response.data.daily[3].dt + response.data.timezone_offset) * 1000,
      day4: (response.data.daily[4].dt + response.data.timezone_offset) * 1000,
      tempMax1: Math.round(response.data.daily[1].temp.max),
      tempMin1: Math.round(response.data.daily[1].temp.min),
      tempMax2: Math.round(response.data.daily[2].temp.max),
      tempMin2: Math.round(response.data.daily[2].temp.min),
      tempMax3: Math.round(response.data.daily[3].temp.max),
      tempMin3: Math.round(response.data.daily[3].temp.min),
      tempMax4: Math.round(response.data.daily[4].temp.max),
      tempMin4: Math.round(response.data.daily[4].temp.min),
      icon1: response.data.daily[1].weather[0].icon,
      icon2: response.data.daily[2].weather[0].icon,
      icon3: response.data.daily[3].weather[0].icon,
      icon4: response.data.daily[4].weather[0].icon,
      lat: response.data.lat,
      lon: response.data.lon,
    });
  }
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function formatDate(timestamp) {
    let dateNext = new Date(timestamp);
    let month = months[dateNext.getMonth()];
    let today = dateNext.getDate();

    return `${month}  ${today}`;
  }

  function iconDisplay(x) {
    let img = (
      <img
        src={`https://openweathermap.org/img/wn/${x}@2x.png`}
        width="50px"
        alt=" "
        id="icon"
      />
    );
    return img;
  }
  if (
    nextData.loaded &&
    nextData.lat === props.lat &&
    nextData.lon === props.lon
  ) {
    return (
      <div>
        <ul>
          <hr />
          <li>
            <div className="row">
              <span className="col-6">{formatDate(nextData.day1)}</span>
              <span className="col-3">
                {nextData.tempMax1}° / {nextData.tempMin1}°
              </span>
              <span className="col-3">{iconDisplay(nextData.icon1)}</span>
              <hr />
            </div>
          </li>

          <li>
            <div className="row">
              <span className="col-6">{formatDate(nextData.day2)}</span>
              <span className="col-3">
                {nextData.tempMax2}° / {nextData.tempMin2}°{" "}
              </span>
              <span className="col-3">{iconDisplay(nextData.icon2)}</span>
              <hr />
            </div>
          </li>

          <li>
            <div className="row">
              <span className="col-6">{formatDate(nextData.day3)}</span>
              <span className="col-3">
                {nextData.tempMax3}° / {nextData.tempMin3}°{" "}
              </span>
              <span className="col-3">{iconDisplay(nextData.icon3)}</span>
              <hr />
            </div>
          </li>

          <li>
            <div className="row">
              <span className="col-6">{formatDate(nextData.day4)}</span>
              <span className="col-3">
                {nextData.tempMax4}° / {nextData.tempMin4}°{" "}
              </span>
              <span className="col-3">{iconDisplay(nextData.icon4)}</span>
            </div>
          </li>
        </ul>
      </div>
    );
  } else {
    let apiKey1 = "f89f61a51bc4807d3dd00d252a18cc71";

    let apiUrl1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey1}&units=metric`;
    axios.get(apiUrl1).then(handleResponse);

    return null;
  }
}
