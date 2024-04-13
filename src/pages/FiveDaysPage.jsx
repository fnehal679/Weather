import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { NavigationBar } from '../components/NavbarAndFooter/Navbar';
import { Footer } from '../components/NavbarAndFooter/Footer';
import ForecastWeather from '../components/Homepage/components/ForecastWeather';
import { fetchForecast } from '../api/WeatherApi';

const FiveDaysPage = () => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const getForecast = async () => {
      const ip = '178.174.144.45'; // 使用你的IP或者获取逻辑
      const forecastData = await fetchForecast(ip); // 调用获取预报数据的函数
      setForecast(forecastData.forecast); // 存储预报数据
    };

    getForecast();
  }, []);

  return (
    <div>
      <Container>
        <h1>Five Days Forecast</h1>
        <ForecastWeather forecast={forecast} /> {/* 现在应该可以正常显示了 */}
        {/* 可以在这里添加更多的内容，例如图片 */}
      </Container>
    </div>
  );
};

export default FiveDaysPage;
