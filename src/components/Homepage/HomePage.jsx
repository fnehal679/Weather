// src/components/Homepage/HomePage.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TodayWeather from './components/TodayWeather';
import ForecastWeather from './components/ForecastWeather';
import ThreeHoursWeather from './components/ThreeHoursWeather';
import SunTime from './components/SunTime';
import { fetchWeather, fetchForecast } from '../../api/WeatherApi';

const HomePage = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const ip = '178.174.144.45'; // 示例: '178.174.144.45'

  useEffect(() => {
    const getWeatherAndForecast = async () => {
      const weatherData = await fetchWeather(ip);
      const forecastData = await fetchForecast(ip);
      setWeather(weatherData);
      setForecast(forecastData.forecast);
    };

    getWeatherAndForecast();
  }, []);

  return (
    <>
      <TodayWeather weather={weather} />
      <SunTime ip={ip} />
      <ForecastWeather forecast={forecast} />
      <Link to="/fivedays" className="btn btn-primary">More information about future day's weather</Link>
      <ThreeHoursWeather ip={ip} limit={4} /> {/* Updated to only display 4 entries */}
      <Link to="/threehours" className="btn btn-primary">More information about future hour's weather</Link>
    </>
  );
};

export default HomePage;
