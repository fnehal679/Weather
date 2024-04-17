import React from 'react';
import { Link } from 'react-router-dom';
import { useTemperature } from '../../contexts/TemperatureContext';
import LocationInfo from './LocationInfo'; 

//Navbar is a functional component that accepts a weather attribute
const Navbar = ({ weather }) => {
    //useTemperature is used by hook. It returns a object, the object contains toggleUnit function and current unit.
    const { toggleUnit, unit } = useTemperature();

    return (
        <nav className="navbar" style={{ justifyContent: 'space-around' }}>  {/* Elements in the navigation bar are evenly distributed */}
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/fivedays" className="nav-link">5 Days Forecast</Link>
            <Link to="/threehours" className="nav-link">3 Hours Forecast</Link>
            <button onClick={toggleUnit} className="nav-button">
                {/* if the unit is C, show the button 'Switch to Fahrenheit'. Else show the button Switch to Celsius */}
                {unit === 'C' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
            </button>
            <LocationInfo />
        </nav>
    );
};

export default Navbar;
