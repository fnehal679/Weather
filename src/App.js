import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import FiveDaysPage from './pages/FiveDaysPage';  // 确保此路径正确
import ThreeHoursPage from './pages/ThreeHoursPage';  // 确保此路径正确
import Navbar from './components/NavbarAndFooter/Navbar';
import { Footer } from './components/NavbarAndFooter/Footer';
import { TemperatureProvider } from './contexts/TemperatureContext';
import LocationPage from './components/LocationPage/LocationPage';

function App() {
  return (
    <TemperatureProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fivedays" element={<FiveDaysPage />} /> 
          <Route path="/threehours" element={<ThreeHoursPage />} /> 
          <Route path="/location" element={<LocationPage />} />
        </Routes>
        <Footer />
      </Router>
    </TemperatureProvider>
  );
}

export default App;
