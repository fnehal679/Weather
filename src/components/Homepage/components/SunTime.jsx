// src/components/Homepage/components/SunTime.jsx

import React, { useState, useEffect } from 'react';
import { fetchSunTime } from '../../../api/WeatherApi';

const SunTime = ({ ip }) => {
  const [sunTime, setSunTime] = useState({ sunrise: '', sunset: '' });

  useEffect(() => {
    const fetchAndSetSunTime = async () => {
      const times = await fetchSunTime(ip);
      setSunTime(times);
    };

    fetchAndSetSunTime();
  }, [ip]);

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', textAlign: 'center' }}>
      <h4>Sunrise and Sunset Times</h4>
      <p>Sunrise: {sunTime.sunrise}</p>
      <p>Sunset: {sunTime.sunset}</p>
    </div>
  );
};

export default SunTime;
