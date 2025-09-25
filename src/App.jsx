import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./WeatherCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      {/* <SearchBar /> */}
      <WeatherCard />
    </div>
  );
}

export default App;
