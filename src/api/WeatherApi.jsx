// src/api/WeatherApi.jsx

// Get the data for today
export const fetchWeather = async (ip) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=61915eebeb7f45faa0f80330241004&q=${ip}`);
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  return response.json();
};

//Get the data for 5 days
export const fetchForecast = async (ip) => {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=61915eebeb7f45faa0f80330241004&q=${ip}&days=5`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Get the data for every 3 hours
export const fetchThreeHoursWeather = async (ip) => {
  //get the current time
  const now = new Date();
  const currentHour = now.getHours();
  //Caculate the hour for every 3 hours
  const hoursToFetch = Array.from({ length: 8 }, (_, i) => (currentHour + 3 * i) % 24);

  const responses = await Promise.all(
    hoursToFetch.map(hour =>
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=61915eebeb7f45faa0f80330241004&q=${ip}&hour=${hour}`)
    )
  );
  //Wait for all the request are finished. Transfer the result to json
  const datas = await Promise.all(responses.map(res => res.json()));

  //Process the obtained data and return specific weather information at each time point
  return datas.map((data, index) => {
    //Find the data which is the same as hoursToFetch caculated.
    const hourData = data.forecast.forecastday[0].hour.find(h => new Date(h.time).getHours() === hoursToFetch[index]);
    return hourData;
  });
};

//Get sun time
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
