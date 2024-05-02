import { Droplet, Umbrella, Wind } from "lucide-react";

const OtherStatDisplay = ({
  wind,
  clouds,
  humidity,
}: {
  wind: number;
  humidity: number;
  clouds: number;
}) => {
  return (
    <div className="flex flex-row mt-5 lg:mt-0 lg:flex-col gap-6 justify-center h-full ">
      <div className="flex items-center gap-2">
        <Wind color="#757575" size={20} />
        <span className="text-[#757575] text-3xl font-bold">
          {wind}
          <span className="text-sm font-normal">mph</span>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Umbrella color="#757575" size={20} />
        <span className="text-[#757575] text-3xl font-bold">
          {clouds}
          <span className="text-sm font-normal">%</span>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Droplet color="#757575" size={20} />
        <span className="text-[#757575] text-3xl font-bold">
          {humidity}
          <span className="text-sm font-normal">%</span>
        </span>
      </div>
    </div>
  );
};

export default OtherStatDisplay;
