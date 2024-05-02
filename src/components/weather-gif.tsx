import { useEffect, useState } from "react";
import { categorizeWeather } from "../../utils";
import sunnyGif from "../images/sunny-unscreen.gif";
import clearGif from "../images/clear-unscreen.gif";
import rainyGif from "../images/little-rain-unscreen.gif";
import heaveRainGif from "../images/heave-rain-unscreen.gif";
const WeatherGif = ({ code, isDay }: { code: number; isDay: boolean }) => {
  const weather_status = categorizeWeather(code, isDay);
  console.log(weather_status);
  const [src, setsrc] = useState("");
  useEffect(() => {
    // This effect will only run when `weather_status` changes.
    if (weather_status === "Sunny") {
      setsrc(sunnyGif);
    } else if (weather_status === "Clear") {
      setsrc(clearGif);
    } else if (weather_status === "Little Bit Rain") {
      setsrc(rainyGif);
    } else if (weather_status === "Heavy Rain") {
      setsrc(heaveRainGif);
    } else {
      setsrc(""); // Fallback for undefined or unexpected weather statuses
    }
  }, [weather_status]);

  return (
    <div className="">
      <img src={src} className=" object-cover" />
    </div>
  );
};
export default WeatherGif;
