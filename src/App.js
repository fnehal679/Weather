import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import FiveDaysPage from './pages/FiveDaysPage';  // 确保此路径正确
import ThreeHoursPage from './pages/ThreeHoursPage';  // 确保此路径正确
import Navbar from './components/NavbarAndFooter/Navbar';
import { Footer } from './components/NavbarAndFooter/Footer';
import { TemperatureProvider } from './contexts/TemperatureContext';

function App() {
  return (
    <TemperatureProvider>
      <Router>
        <Navbar />  {/* 添加 Navbar 组件 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fivedays" element={<FiveDaysPage />} />  // 添加 /fivedays 的路由
          <Route path="/threehours" element={<ThreeHoursPage />} /> 
          {/* 其他路由... */}
        </Routes>
        <Footer />  {/* 添加 Footer 组件 */}
      </Router>
    </TemperatureProvider>
  );
}

export default App;
