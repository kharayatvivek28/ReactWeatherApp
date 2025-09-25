import React, { useState } from "react";

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "fcc46fc83ace4a96ab991245251909";

  const handleSearch = async () => {
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      const weatherRes = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      const weatherData = await weatherRes.json();
      if (weatherData.error) throw new Error(weatherData.error.message);
      setWeather(weatherData);

      // Fetch 5-day forecast
      const forecastRes = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`
      );
      const forecastData = await forecastRes.json();
      setForecast(forecastData.forecast.forecastday);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: "8px 12px", marginLeft: "10px" }}
      >
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            width: "250px",
            margin: "20px auto",
            padding: "20px",
          }}
        >
          <h2>{weather.location.name}</h2>
          <p>
            {weather.location.region}, {weather.location.country}
          </p>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <p>Humidity: {weather.current.humidity}%</p>
        </div>
      )}

      {forecast.length > 0 && (
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "10px",
            padding: "10px",
          }}
        >
          {forecast.map((day, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                minWidth: "150px",
                textAlign: "center",
              }}
            >
              <p>{new Date(day.date).toLocaleDateString()}</p>
              <img
                src={day.day.condition.icon}
                alt={day.day.condition.text}
                style={{ width: "50px", height: "50px" }}
              />
              <p>{day.day.avgtemp_c}°C</p>
              <p>{day.day.condition.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
