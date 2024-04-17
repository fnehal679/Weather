import React from 'react';
import { useTemperature } from '../../../contexts/TemperatureContext';

const ForecastWeather = ({ forecast }) => {
  const { unit } = useTemperature();

  if (!forecast || !forecast.forecastday) return <div>Loading...</div>;

  return (
    <div className="forecast-weather-container">
      <h4 style={{ padding: '20px', textAlign: 'center' }}>Daily Forecast</h4>
      <table className="forecast-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp (High/Low)</th>
            <th>Weather</th>
            <th>Humidity</th>
            <th>Precipitation</th>
            <th>UV</th>
          </tr>
        </thead>
        <tbody>
          {forecast.forecastday.map((day) => (
            <tr key={day.date}>
              <td>{day.date}</td>
              <td>
                {unit === 'C' ? 
                  `${day.day.maxtemp_c}°C / ${day.day.mintemp_c}°C` : 
                  `${day.day.maxtemp_f}°F / ${day.day.mintemp_f}°F`}
              </td>
              <td><img src={`https:${day.day.condition.icon}`} alt="Weather Icon" style={{ width: '50px' }} /></td>
              <td>{day.day.avghumidity}%</td>
              <td>{day.day.totalprecip_mm}mm</td>
              <td>{day.day.uv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForecastWeather;
