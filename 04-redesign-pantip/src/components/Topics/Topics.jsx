import React from "react";
import topicsData from "../../data/topics.json";

const Topics = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="px-4  py-4  md:py-8">
          <div className="hidden md:flex flex-col items-stretch text-center bg-[#353156] text-white rounded-md">
            <div className="text-left indent-2 py-2 bg-[#2e2a4b] rounded-md">
              <h1 className="text-lg text-[#f4c02d]">เลือกห้อง</h1>
            </div>
            <div className="flex items-center">
              {topicsData?.map((data, idx) => (
                <div
                  className="md:flex-1 flex-col items-center p-2 min-h-[54px] rounded-md cursor-pointer hover:bg-[#2c284a]"
                  key={idx}
                >
                  <img
                    className="w-full h-10 object-cover"
                    src={data.svg}
                    alt="cagetoriesImage"
                  />
                  <p className="text-center pt-2 text-[10px]">
                    {data.topicName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
