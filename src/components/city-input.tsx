import { useState } from "react";
import { useWeather } from "../../context/weatherContext";
import { categorizeWeather } from "../../utils";

const CityInput = ({ code, isDay }: { code: number; isDay: boolean }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(""); // Initialized to empty to be set on edit start
  const status = categorizeWeather(code, isDay);

  const { updateCity, city } = useWeather();

  const handleTextClick = () => {
    setIsEditing(true);
    setText(city); // Set text to current city when editing starts
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value); // Just update local state, do not update context here
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text) {
      updateCity(text); // Only update city in context when submitting
    }
    setIsEditing(false);
  };

  const handleOnBlur = () => {
    if (text === "") {
      setText(city); // If empty, revert to current city
    } else if (text === city) {
      setIsEditing(false);
    } else {
      updateCity(text); // Update city in context when user moves away from input
    }
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center w-full ">
      <h1 className="text-2xl font-extralight sm:text-4xl text-center mt-36 font-poppins mx-10 sm:mx-0">
        Right now in{" "}
        {isEditing ? (
          <form onSubmit={handleSubmit} className="inline">
            <input
              onChange={handleInputChange}
              value={text}
              onBlur={handleOnBlur}
              style={{
                minWidth: "50px",
                width: `${Math.max(text.length * 17, 150)}px`,
              }}
              className="text-2xl sm:text-4xl underline bg-transparent inline font-semibold break-words outline-none text-[#000000] min-w-fit"
              autoFocus // Automatically focus this input when it becomes editable
            />
          </form>
        ) : (
          <span className="font-semibold " onClick={handleTextClick}>
            {city}
          </span>
        )}
        , it's {status}
      </h1>
    </div>
  );
};

export default CityInput;
