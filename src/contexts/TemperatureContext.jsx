// src/contexts/TemperatureContext.js

import React, { createContext, useContext, useState } from 'react';

const TemperatureContext = createContext();

export const useTemperature = () => useContext(TemperatureContext);

export const TemperatureProvider = ({ children }) => {
  const [unit, setUnit] = useState('C');

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
  };

  return (
    <TemperatureContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </TemperatureContext.Provider>
  );
};
