// src/components/Homepage/components/ThreeHoursWeather.jsx
import React, { useState, useEffect } from 'react';
import { fetchThreeHoursWeather } from '../../../api/WeatherApi';
import { useTemperature } from '../../../contexts/TemperatureContext';

const ThreeHoursWeather = ({ ip, limit }) => {
  const [hoursData, setHoursData] = useState([]);
  const { unit } = useTemperature();

  useEffect(() => {
    console.log(ip);
    async function fetchData() {
      const data = await fetchThreeHoursWeather(ip);
      /* If the limit parameter is provided, 
      use data.slice(0, limit) to intercept the first limit 
      elements from the returned data array.*/
      if (limit) {
        setHoursData(data.slice(0, limit));
      } else {
        setHoursData(data);
      }
    }

    fetchData();
  }, [ip, limit]);

  return (
    <div className="simple-weather-container">
      <h4 style={{ padding: '20px', textAlign: 'center' }}>Three Hourly Weather Forecast</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {hoursData.length > 0 ? (
          hoursData.map((hourData, index) => (
            hourData ? (
              <div key={index} style={{ flex: '1 0 20%', margin: '5px', padding: '10px', border: '1px solid #ccc' }}>
                <p><strong>Time:</strong> {hourData.time}</p>
                <p><strong>Temperature:</strong> {unit === 'C' ? `${hourData.temp_c}°C` : `${hourData.temp_f}°F`}</p>
                <p><strong>Condition:</strong> {hourData.condition.text} <img src={hourData.condition.icon} alt="Weather Icon" style={{ verticalAlign: 'middle' }} /></p>
                <p><strong>Wind:</strong> {hourData.wind_kph} kph ({hourData.wind_dir})</p>
                <p><strong>Humidity:</strong> {hourData.humidity}%</p>
              </div>
            ) : <div key={index}>No data for this hour.</div>
          ))
        ) : (
          <p>Loading or no data available...</p>
        )}
      </div>
    </div>
  );
};

export default ThreeHoursWeather;
