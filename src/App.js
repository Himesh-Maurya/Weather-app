import React, { useState } from "react";
import { fetchWeather } from "./fetchWeatherapi.js";

import "./App.css";

const App = () => {
  const [find, setfind] = useState("");
  const [weather, setWeather] = useState("");
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(find);
      setWeather(data);
      setfind("");
    }
  };

  return (
    <div className="main">
      <input
        type="text"
        placeholder="Search your city..."
        className="search"
        value={find}
        onChange={(e) => setfind(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp - 273.15)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
