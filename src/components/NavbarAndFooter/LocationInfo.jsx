// src/components/NavbarAndFooter/LocationInfo.jsx

import React, { useState, useEffect } from 'react';

const LocationInfo = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState('Locating...');

    useEffect(() => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude.toFixed(2));
                setLng(position.coords.longitude.toFixed(2));
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }, []);

    return (
        <div style={{ marginLeft: '20px' }}>
            Your location:  {status ? <p>{status}</p> : <p>Lat: {lat}, Lng: {lng}</p>}
        </div>
    );
}

export default LocationInfo;
