// src/pages/ThreeHoursPage.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import ThreeHoursWeather from '../components/Homepage/components/ThreeHoursWeather';
import { NavigationBar } from '../components/NavbarAndFooter/Navbar';
import { Footer } from '../components/NavbarAndFooter/Footer';

const ThreeHoursPage = () => {
  const ip = "178.174.144.45"; 

  return (
    <div>
      <Container>
        <h1>Three Hourly Forecast</h1>
        <ThreeHoursWeather ip={ip} showAll={true} />
      </Container>
    </div>
  );
};

export default ThreeHoursPage;
