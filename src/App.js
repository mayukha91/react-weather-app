import React from "react";
import Connect from "./Connect";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Connect defaultCity="Paris" />
      <footer>
        <a href="https://github.com/mayukha91/Vanilla-weather-app">
          open-source{" "}
        </a>
        by Suma
      </footer>
    </div>
  );
}
