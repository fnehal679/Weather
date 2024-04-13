// src/api/WeatherApi.jsx

// 导入现有函数
export const fetchWeather = async (ip) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=61915eebeb7f45faa0f80330241004&q=${ip}`);
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  return response.json();
};

export const fetchForecast = async (ip) => {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=61915eebeb7f45faa0f80330241004&q=${ip}&days=5`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// 新添加的函数
export const fetchThreeHoursWeather = async (ip) => {
  const now = new Date();
  const currentHour = now.getHours();
  const hoursToFetch = Array.from({ length: 8 }, (_, i) => (currentHour + 3 * i) % 24);

  const responses = await Promise.all(
    hoursToFetch.map(hour =>
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=61915eebeb7f45faa0f80330241004&q=${ip}&hour=${hour}`)
    )
  );
  const datas = await Promise.all(responses.map(res => res.json()));

  return datas.map((data, index) => {
    const hourData = data.forecast.forecastday[0].hour.find(h => new Date(h.time).getHours() === hoursToFetch[index]);
    return hourData;
  });
};

//Sun time
export const fetchSunTime = async (ip) => {
  const response = await fetch(`http://api.weatherapi.com/v1/marine.json?key=61915eebeb7f45faa0f80330241004&q=${ip}&days=1`);
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  const data = await response.json();
  return {
    sunrise: data.forecast.forecastday[0].astro.sunrise,
    sunset: data.forecast.forecastday[0].astro.sunset
  };
};
