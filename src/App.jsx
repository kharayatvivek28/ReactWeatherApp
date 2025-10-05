import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./index.css";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [city, setCity] = useState("New York");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Serverless backend URL (hosted on Vercel)
  const SERVERLESS_URL = "/api/getWeather"; // relative path works on Vercel

  const fetchWeather = async (searchCity) => {
    if (!searchCity) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${SERVERLESS_URL}?city=${searchCity}`);
      const data = await res.json();

      if (data.error) throw new Error(data.error);

      setWeatherData(data.current);
      setForecastData(data.forecast.forecastday);
    } catch (err) {
      setError(err.message || "Failed to fetch data.");
      setWeatherData(null);
      setForecastData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city); // fetch default city weather on load
  }, []);

  // ---------------- Dark Mode Effect ----------------
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="app-container">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {weatherData && (
          <WeatherCard weather={weatherData} forecast={forecastData} />
        )}
      </main>
      <Footer />
    </div>
  );
}
