import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,

      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <form>
          <input type="search" placeholder="Enter a city" />
          <button className="search">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <div className="row ">
              <div className="col-6 day">January 15 </div>
              <div className="col-6 time"> 08:00</div>
            </div>
          </li>
          <li>
            <div className="row">
              <div className="col-6 temp">
                <strong> {weatherData.temperature}</strong>
                <small>
                  <a href="#" id="cen">
                    °C
                  </a>{" "}
                  |
                  <a href="#" id="fah">
                    °F
                  </a>
                </small>
              </div>
              <div className="col-6 imgDesc">
                <div className="row img1">
                  <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    alt=""
                    id="icon"
                  />
                </div>
                <div className="row sub1 text-capitalize">
                  {weatherData.description}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  } else {
    let apiKey = "81a39b8b4f83887f2094935f304faa2f";
    let city = "Paris";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
