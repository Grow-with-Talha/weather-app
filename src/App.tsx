import { useWeather } from "../context/weatherContext";
import CityInput from "./components/city-input";
import Error from "./components/Error";
import Loading from "./components/loading";
import OtherStatDisplay from "./components/other-stat-display";
import WeatherDisplay from "./components/weather-Display";
import WeatherGif from "./components/weather-gif";
import DayWeatherDisplay from "./components/week-day-weather-display";

function App() {
  const { weatherData } = useWeather();
  console.log(weatherData);

  if (weatherData === null) {
    return <Loading />;
  }

  if (weatherData === "Error") {
    return <Error />;
  }
  const { is_day, temp_c, temp_f, cloud, humidity, wind_kph } =
    weatherData.current;
  const { code } = weatherData.current.condition;

  return (
    <div className="px-4 md:px-8 lg:px-16 flex flex-col items-center gap-8">
      <CityInput code={code} isDay={is_day === 1 ? true : false} />
      <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2">
          <WeatherGif code={code} isDay={is_day === 1 ? true : false} />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2">
          <WeatherDisplay tempC={temp_c} tempF={temp_f} />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2">
          <OtherStatDisplay
            clouds={cloud}
            humidity={humidity}
            wind={wind_kph}
          />
        </div>
      </div>
      <DayWeatherDisplay forecastData={weatherData.forecast.forecastday} />
    </div>
  );
}

export default App;
