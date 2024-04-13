// src/components/NavbarAndFooter/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useTemperature } from '../../contexts/TemperatureContext';
import SimpleWeather from '../Weather/SimpleWeather'; // Corrected path

const Navbar = ({ weather }) => {
  const { toggleUnit, unit } = useTemperature();

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fivedays">5 Days Forecast</Link></li>
        <li><Link to="/threehours">3 Hours Forecast</Link></li>
        <li>
          <button onClick={toggleUnit}>
            {unit === 'C' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
          </button>
        </li>
      </ul>
      {/* <SimpleWeather weather={weather} /> */}
    </nav>
  );
};

export default Navbar;
