// src/components/Homepage/components/TodayWeather.js
import React from 'react';
import { useTemperature } from '../../../contexts/TemperatureContext';

const TodayWeather = ({ weather }) => {
  const { unit } = useTemperature();
  if (!weather) return <div>Loading...</div>;

  return (
    <div className="text-center" style={{ backgroundColor: 'white' }}>
      <h4>Today's Weather in {weather.location.name}</h4>
      {/* <p>Temperature: {weather.current.temp_c}°C / {weather.current.temp_f}°F</p> */}
      <p>{unit === 'C' ? `${weather.current.temp_c}°C` : `${weather.current.temp_f}°F`}</p>
      <p>Wind: {weather.current.wind_kph}kph ({weather.current.wind_dir})</p>
      <p>Humidity: {weather.current.humidity}%</p>
      <p>Condition: {weather.current.condition.text}</p>
      {/* You can add more details from the weather data as needed */}
    </div>
  );
};

export default TodayWeather;
