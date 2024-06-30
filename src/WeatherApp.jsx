import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp(){
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.25,
    tempMin: 25.35,
    tempMax: 25.94,
    humidity: 47,
    weather: "haze",
  });
 
  let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
  }

  return(
    <div style={{textAlign: "center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  );
}