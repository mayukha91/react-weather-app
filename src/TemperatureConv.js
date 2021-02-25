import React,{useState }from "react";

export default function TemperatureConv(props){
    let [tempIn,setTempIn]=useState("celsius");

    function toCelsius(event) {
    event.preventDefault();
    setTempUnit("celsius");
  }

  function toFahrenheit(event) {
    event.preventDefault();
    setTempUnit("fahrenheit");
  }
   
  if (tempIn === "celsius"){
    return(
        {props.max}/{props.min}
    );
  }else{
      let fMax = Math.round((props.max * 9) / 5 + 32);
      let fMin = Math.round((props.min * 9) / 5 + 32);
      return(
        {props.fMax}/{props.fMin}
    );
  }
}