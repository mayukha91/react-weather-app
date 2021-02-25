import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import NextFourDays from "./NextFourDays";
import "./Connect.css";
import axios from "axios";

export default function Connect(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      visibility: response.data.visibility / 1000,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = "9e274541ce589d07f5464be359594a01";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Connect">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              onChange={handleCityChange}
            />
            <button className="search">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <WeatherInfo data={weatherData} />
          <NextFourDays lat={weatherData.lat} lon={weatherData.lon} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
