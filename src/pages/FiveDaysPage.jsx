import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from '../components/NavbarAndFooter/Navbar'; 
import { Footer } from '../components/NavbarAndFooter/Footer';
import ForecastWeather from '../components/Homepage/components/ForecastWeather';
import { fetchForecast } from '../api/WeatherApi';

const FiveDaysPage = () => {
  const [forecast, setForecast] = useState(null);
  const [ip, setIp] = useState(null);  // Added state for IP

  useEffect(() => {
    // Function to fetch and set forecast
    const getForecast = async () => {
      if (ip) {
        const forecastData = await fetchForecast(ip);
        setForecast(forecastData.forecast);
      }
    };

    // Check if the browser supports geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const formattedLocation = `${position.coords.latitude},${position.coords.longitude}`;
        setIp(formattedLocation); // Set the IP state with the formatted location
      }, () => {
        setIp('180.228.172.138'); // Fallback IP if location cannot be retrieved
      });
    } else {
      setIp('180.228.172.138'); // Default IP if geolocation is not supported
    }

    getForecast();
  }, [ip]);  // Dependency array includes ip, to re-run the effect when ip changes

  return (
    <div>
      <Container>
        <ForecastWeather forecast={forecast} />
      </Container>
    </div>
  );
};

export default FiveDaysPage;
