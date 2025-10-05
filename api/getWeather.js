import fetch from "node-fetch";

export default async function handler(req, res) {
  const city = req.query.city;
  const API_KEY = process.env.WEATHER_API_KEY; // Set in Vercel Environment Variables

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    // Fetch current weather
    const weatherRes = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    const weatherData = await weatherRes.json();

    // Fetch 5-day forecast
    const forecastRes = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`
    );
    const forecastData = await forecastRes.json();

    if (weatherData.error) {
      return res.status(400).json({ error: weatherData.error.message });
    }

    // Flatten object for App.jsx
    res.status(200).json({
      weather: weatherData,
      forecast: forecastData.forecast.forecastday,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
}
