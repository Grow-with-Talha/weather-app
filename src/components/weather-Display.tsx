import { useState } from "react";

const WeatherDisplay = ({ tempF, tempC }: { tempF: number; tempC: number }) => {
  const [mode, setMode] = useState<"C" | "F">("C");
  const handleToggle = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    setMode(mode === "C" ? "F" : "C");
  };

  return (
    <div className="flex  flex-col  gap-6 items-center justify-center h-full">
      <h1 className="text-7xl md:text-9xl">
        {mode === "C" ? tempC : Math.trunc(tempF)}
      </h1>
      <div className="gap-2">
        <span
          onClick={handleToggle}
          className={`cursor-pointer ${
            mode === "C" ? "font-bold" : "font-normal"
          }`}
        >
          °C
        </span>{" "}
        |{" "}
        <span
          onClick={handleToggle}
          className={`cursor-pointer ${
            mode === "F" ? "font-bold" : "font-normal"
          }`}
        >
          °F
        </span>
      </div>
    </div>
  );
};

export default WeatherDisplay;
