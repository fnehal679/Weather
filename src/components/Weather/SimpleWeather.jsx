// src/components/Homepage/components/SimpleWeather.js
import React from 'react';
import { useTemperature } from '../../contexts/TemperatureContext';

const SimpleWeather = ({ weather }) => {
  const { unit } = useTemperature();

  if (!weather) return <div>Loading...</div>;

  return (
    <div className="simple-weather-container text-center">
      <img src={`https:${weather.current.condition.icon}`} alt="Weather Icon" />
      {/* <h3>{weather.current.temp_c}°C / {weather.current.temp_f}°F</h3> */}
      <h3>{unit === 'C' ? `${weather.current.temp_c}°C` : `${weather.current.temp_f}°F`}</h3>
      <p>{weather.location.name}, {weather.location.country}</p>
    </div>
  );
};

export default SimpleWeather;
