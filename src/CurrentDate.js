import React from "react";

export default function CurrentDate(props) {
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
  let month = months[props.date.getMonth()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let today = props.date.getDate();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (today < 10) {
    today = `0${today}`;
  }

  return [month, today, hours, minutes];
}
