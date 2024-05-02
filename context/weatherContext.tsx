import React, {
  useContext,
  useState,
  useCallback,
  createContext,
  useEffect,
} from "react";
import { WeatherData } from "../types";
const WeatherContext = createContext({
  city: "Karachi",
  weatherData: null as WeatherData | null | "Error",
  updateCity: (newCity: string) => newCity,
});

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null | "Error">(
    null
  );
  const [city, setCity] = useState("Karachi");

  const fetchWeather = useCallback(async (city: string) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.error) {
        setWeatherData("Error");
      } else {
        setWeatherData(data);
      }
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    }
  }, []);
  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city, fetchWeather]);
  const updateCity = useCallback(
    (newCity: string) => {
      setCity(newCity);
      setWeatherData(null);
      fetchWeather(newCity);
      return newCity;
    },
    [fetchWeather]
  );
  return (
    <WeatherContext.Provider
      value={{
        city,
        weatherData,
        updateCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
