import React from "react";

export default function WeatherCard({ weather, forecast }) {
  return (
    <div className="weather-container">
      {/* Current Weather Card */}
      <div className="current-weather-card">
        <h2>{weather.location.name}</h2>
        <p>
          {weather.location.region}, {weather.location.country}
        </p>
        <p>Temperature: {weather.current.temp_c}°C</p>
        <p>{weather.current.condition.text}</p>
        <p>Humidity: {weather.current.humidity}%</p>
      </div>

      {/* Forecast Cards */}
      <div className="forecast-container">
        {forecast.map((day) => (
          <div key={day.date} className="forecast-card">
            <p>{new Date(day.date).toLocaleDateString()}</p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <p>{day.day.avgtemp_c}°C</p>
            <p>{day.day.condition.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
