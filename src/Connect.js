import React from "react";
import App from "./App";
import "./Connect.css";

export default function Connect() {
  return (
    <div className="Connect">
      <App defaultCity="Paris" />
      <small>
        <a href="https://github.com/mayukha91/Vanilla-weather-app">
          open-source{" "}
        </a>
        by Suma
      </small>
    </div>
  );
}
