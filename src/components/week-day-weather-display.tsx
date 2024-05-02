import { ForecastDay } from "../../types";
import { getDayfromDate } from "../../utils";
interface WeatherDisplayProps {
  forecastData: ForecastDay[];
}

const DayWeatherDisplay: React.FC<WeatherDisplayProps> = ({ forecastData }) => {
  return (
    <div className="flex flex-wrap justify-center p-9 items-center gap-12">
      {forecastData.slice(1).map((data) => {
        const d = new Date(data.date);
        const DayInNumber = d.getDay();
        const dateInString = getDayfromDate(DayInNumber);
        return (
          <div
            key={data.date}
            className="flex flex-col items-center justify-center"
          >
            <img
              src={data.day.condition.icon}
              alt=""
              className="object-contain"
            />
            <h1 className="text-2xl text-gray-500">
              {data.day.maxtemp_c}°C | {data.day.maxtemp_f}°F
            </h1>
            <p className="text-gray-700">{dateInString}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DayWeatherDisplay;
