import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TodayWeather from './components/TodayWeather';
import ForecastWeather from './components/ForecastWeather';
import ThreeHoursWeather from './components/ThreeHoursWeather';
import SunTime from './components/SunTime';
import { fetchWeather, fetchForecast } from '../../api/WeatherApi';

const HomePage = () => {
  //useState is a hook. Initial value is null. Current status is weather. setWeather is the function to update the status.
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [ip, setIp] = useState(null);

  //useEffect is a hook used to handle side effects.
  useEffect(() => {
    //Below is the function, contains side-effect logic to be executed
    //Check if broswer support the navigator.geolocation.
    if (navigator.geolocation) {
      //If yes, get the postion
      navigator.geolocation.getCurrentPosition((position) => {
        //Format the position
        const formattedLocation = `${position.coords.latitude},${position.coords.longitude}`;
        //Update the parameter ip
        setIp(formattedLocation);
      }, () => {
        setIp('180.228.172.138');//If getCurrentPosition funtion failed, use the default ip.
      });
    } else {
      setIp('180.228.172.138');
    }
//Once the location information is obtained, use this location information to call fetchWeather and fetchForecast to obtain weather data, and save the obtained data through status (weather and forecast).
/* The entire process is triggered by the setting and updating of ip. 
 Each ip update will cause useEffect to be re-executed, 
  thereby initiating a new API request and obtaining the latest weather data. */
//asynchronous function
    if (ip) {
      const getWeatherAndForecast = async () => {
        //await will wait for Promise to be solved
        const weatherData = await fetchWeather(ip);
        const forecastData = await fetchForecast(ip);
        setWeather(weatherData);
        //Forecast data in a json object, the object name is 'forecast'.
        setForecast(forecastData.forecast);
      };

      getWeatherAndForecast();
    }
  }, [ip]);//Here is the dependency array, telling React which variables need to be re-executed when the side effect changes.

  return (
    <>
      <div className="weather-container">
        <TodayWeather weather={weather} />
        <SunTime ip={ip} />
      </div>
      <div className="forecast-container">
        <ForecastWeather forecast={forecast} />
        <Link to="/fivedays" className="btn btn-primary">Get weather information for the next few days</Link>
      </div>
      <div className="three-hours-container">
        <ThreeHoursWeather ip={ip} limit={4} />
        <Link to="/threehours" className="btn btn-primary">Get weather information for the next few hours</Link>
      </div>
    </>
  );
};

export default HomePage;
