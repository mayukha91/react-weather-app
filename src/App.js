import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <form>
        <input type="search" placeholder="Enter a city" />
        <button class="search">
          <i class="fas fa-search"></i>
        </button>
      </form>
      <h1>New York </h1>
      <ul>
        <li>
          <div class="row ">
            <div class="col-6 day">January 15</div>
            <div class="col-6 time"> 08:00</div>
          </div>
        </li>
        <li>
          <div class="row">
            <div class="col-6 temp">
              <strong> 56</strong>
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
            <div class="col-6 imgDesc">
              <div class="row img1">
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
                  id="icon"
                />
              </div>
              <div class="row sub1">Cloudy</div>
            </div>
          </div>
        </li>
      </ul>
      <small>
        <a href="https://github.com/mayukha91/Vanilla-weather-app">
          open-source{" "}
        </a>
        by Suma
      </small>
    </div>
  );
}
