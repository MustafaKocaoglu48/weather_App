import React, { useState, useEffect } from "react";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = () => {
    if (!city) {
      alert("Lütfen bir şehir ismi girin!");
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=feadfc7ceff6fee37d2d342f2109778a&units=metric&lang=tr`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeather({
            city: data.name,
            temperature: `${Math.round(data.main.temp)}°C`,
            description: data.weather[0].description,
          });
        } else {
          alert(`Hata: ${data.message}`);
        }
      })
      .catch(() => alert("Bir hata oluştu!"));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      document.getElementById("digitalClock").innerText = timeString;
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="weather-app">
      <div className="input-section">
        <input
          type="text"
          placeholder="Şehir adı"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Getir</button>
      </div>
      <div className="weather-info">
        {weather && (
          <div>
            <h3>{weather.city}</h3>
            <p>{weather.temperature}</p>
            <p>{weather.description}</p>
          </div>
        )}
      </div>
      <div id="digitalClock" className="digital-clock"></div>
    </div>
  );
};

export default WeatherApp;
