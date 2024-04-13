import React from 'react';
import { useTemperature } from '../../../contexts/TemperatureContext';

const ForecastWeather = ({ forecast }) => {
  const { unit } = useTemperature();

  if (!forecast || !forecast.forecastday) return <div>Loading...</div>;

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h4>Daily Forecast</h4>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp (High/Low)</th>
            <th>Icon</th>
            <th>Humidity</th>
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
              <td><img src={day.day.condition.icon} alt="Weather Icon" /></td>
              <td>{day.day.avghumidity}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Removed the button as per earlier modifications */}
    </div>
  );
};

export default ForecastWeather;
