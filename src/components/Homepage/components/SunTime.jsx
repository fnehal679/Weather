// src/components/Homepage/components/SunTime.jsx

import React, { useState, useEffect } from 'react';
import { fetchSunTime } from '../../../api/WeatherApi';

//Accept ip as prop
const SunTime = ({ ip }) => {
  //Defines a state variable named sunTime
const [sunTime, setSunTime] = useState({ sunrise: '', sunset: '' });

/* TuseEffect sets up a side effect that depends on the change in ip. 
This side effect will be re-executed every time when ip changes. 
An asynchronous function fetchAndSetSunTime is defined internally as a side effect, 
which calls the fetchSunTime function to obtain the sunrise and sunset times, a
nd updates the status through setSunTime. */

  useEffect(() => {
    const fetchAndSetSunTime = async () => {
      const times = await fetchSunTime(ip);
      setSunTime(times);
    };

    fetchAndSetSunTime();
  }, [ip]);

  return (
    <div style={{ padding: '20px', textAlign: 'left' }}>
          {/* <div style={{ backgroundColor: 'white', padding: '20px', textAlign: 'center' }}></div> */}
      <h6>Sunrise and Sunset Times</h6>
      <p>Sunrise: {sunTime.sunrise}</p>
      <p>Sunset: {sunTime.sunset}</p>
    </div>
  );
};

export default SunTime;
