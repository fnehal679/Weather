import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ThreeHoursWeather from '../components/Homepage/components/ThreeHoursWeather';

const ThreeHoursPage = () => {
  const [ip, setIp] = useState(null);  // Initialize IP state

  useEffect(() => {
    // Check if the browser supports geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Format the location as latitude,longitude string
        const formattedLocation = `${position.coords.latitude},${position.coords.longitude}`;
        setIp(formattedLocation);  // Set IP to the formatted location
      }, () => {
        setIp('180.228.172.138');  // Default IP if geolocation fails
      });
    } else {
      setIp('180.228.172.138');  // Default IP if geolocation is not supported
    }
  }, []);

  return (
    <div>
      <Container>
        {/* Conditional rendering based on whether IP is available */}
        {ip ? (
          <ThreeHoursWeather ip={ip} showAll={true} />
        ) : (
          <p>Loading or unable to retrieve location...</p>
        )}
      </Container>
    </div>
  );
};

export default ThreeHoursPage;
