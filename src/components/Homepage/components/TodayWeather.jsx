import React from 'react';
import { useTemperature } from '../../../contexts/TemperatureContext';

//Defines a functional component named TodayWeather that receives a prop named weather
const TodayWeather = ({ weather }) => {
  //Use useTemperature to get the unit
  const { unit } = useTemperature();
  //If weather is not existed, show 'Loading'
  if (!weather) return <div>Loading...</div>;

  return (
    <div className="weather-container">
      <div>
        <h4>Today's Weather in {weather.location.name}</h4>
        {/* Homepage is the father component. Homepage pass the prop named weather here */}
        <h2>{unit === 'C' ? `${weather.current.temp_c}°C` : `${weather.current.temp_f}°F`}</h2>
        <p>Wind: {weather.current.wind_kph} kph ({weather.current.wind_dir})</p>
        <p>Humidity: {weather.current.humidity}%</p>
        <p>Condition: {weather.current.condition.text}</p>
      </div>
      <div className="icon-container">
        <img src={`https:${weather.current.condition.icon}`} alt="Weather Icon" className="weather-icon" />
      </div>
    </div>
  );
};

export default TodayWeather;
