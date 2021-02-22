import React, { useState } from "react";
import axios from "axios";

export default function NextFourDays(props) {
  let [nextData, setNextData] = useState(" ");
  let apiKey1 = "9e274541ce589d07f5464be359594a01";

  let apiUrl1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey1}&units=metric`;

  function handleResponse(response) {
    console.log(response.data);

    setNextData({
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
      icon1: response.data.daily[1].weather.icon,
      icon2: response.data.daily[1].weather.icon,
      icon3: response.data.daily[1].weather.icon,
      icon4: response.data.daily[1].weather.icon,
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
    let date = new Date(timestamp);
    let month = months[date.getMonth()];
    let today = date.getDate();

    return `${month}  ${today}`;
  }

  function iconDisplay(x) {
    let img = (
      <img
        src={`https://openweathermap.org/img/wn/${x}@2x.png`}
        alt=" "
        id="icon"
      />
    );
    return img;
  }

  axios.get(apiUrl1).then(handleResponse);
  return (
    <div>
      <ul>
        <hr />
        <li>
          <div className="row">
            <div className="col-6">{formatDate(nextData.day1)}</div>
            <div className="col-6">
              {nextData.tempMax1}° / {nextData.tempMin1}°{" "}
              {iconDisplay(nextData.icon1)}
            </div>
          </div>
        </li>
        <hr />
        <li>
          <div className="row">
            <div className="col-6">{formatDate(nextData.day2)}</div>
            <div className="col-6">
              {nextData.tempMax2}° / {nextData.tempMin2}°{" "}
              {iconDisplay(nextData.icon2)}
            </div>
          </div>
        </li>
        <hr />
        <li>
          <div className="row">
            <div className="col-6">{formatDate(nextData.day3)}</div>
            <div className="col-6">
              {nextData.tempMax3}° / {nextData.tempMin3}°{" "}
              {iconDisplay(nextData.icon3)}
            </div>
          </div>
        </li>
        <hr />
        <li>
          <div className="row">
            <div className="col-6">{formatDate(nextData.day4)}</div>
            <div className="col-6">
              {nextData.tempMax4}° / {nextData.tempMin4}°{" "}
              {iconDisplay(nextData.icon4)}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
