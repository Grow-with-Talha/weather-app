import { useWeather } from "../../context/weatherContext";
import ErrorPandaGif from "../images/Error-panda.gif";
const Error = () => {
  const { updateCity } = useWeather();

  const handleOnError = () => {
    updateCity("Karachi");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-8">
      <h1 className="sm:text-3xl text-xl text-center">
        Your city was not found. Try something different
      </h1>
      <img src={ErrorPandaGif} alt="panda sleeping" className="w-40 h-40" />
      <button
        className="border-none bg-black px-4 py-2 rounded-lg text-white font-bold"
        onClick={handleOnError}
      >
        Return
      </button>
    </div>
  );
};

export default Error;
