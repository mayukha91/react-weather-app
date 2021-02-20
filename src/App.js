import React, { useState } from "react";
//import CurrentDate from "./CurrentDate";
import WeatherInfo from "./WeatherInfo";
import "./App.css";
import axios from "axios";

export default function App() {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState("Paris");

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,

      city: response.data.name,
    });
  }
  function search() {
    let apiKey = "81a39b8b4f83887f2094935f304faa2f";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
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
      </div>
    );
  } else {
    search();

    return "Loading..";
  }
}
