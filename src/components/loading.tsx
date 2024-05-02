import duckGif from "../images/duckwalkingloader.gif";
import pandaGif2 from "../images/cutepanda2.gif";
const Loading = () => {
  const condition = Math.floor(Math.random() * (1 - 0 + 1) + 0);
  console.log(condition);

  return (
    <div className="h-screen w-full flex flex-col gap-4 items-center justify-center">
      {condition === 0 ? (
        <img src={pandaGif2} alt="" className="w-32 h-32 object-contain" />
      ) : (
        <img src={duckGif} alt="" className="w-32 h-32 object-contain" />
      )}
      <h3>Loading....</h3>
    </div>
  );
};

export default Loading;
