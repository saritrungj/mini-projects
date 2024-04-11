import React from "react";

const CoWorkPantip = () => {
  return (
    <div className="flex flex-col w-72 bg-[#2e2a4b] rounded-md">
      <div className="border border-gray-400 rounded-md">
        <div className="flex items-center justify-between px-4 py-3 w-full rounded-md">
          <h1 className="text-md  text-[#f4c02d]">เว็ปในเครือ</h1>
        </div>
        <div className="bg-[#353156] rounded-md grid grid-cols-2 px-2 py-4 gap-2 items-center">
          <div className="w-32">
            <img
              src="https://pantip.com/static/images/logo-maggang.png"
              alt=""
            />
          </div>
          <div className="w-32">
            <img
              src="https://pantip.com/static/images/logo-pantipmarket.png"
              alt=""
            />
          </div>
          <div className="w-32">
            <img
              src="https://pantip.com/static/images/logo-pantown.png"
              alt=""
            />
          </div>
          <div className="w-32">
            <img
              src="https://pantip.com/static/images/logo-bloggang.png"
              alt=""
            />
          </div>
        </div>
        <div className="py-3 text-center bg-[#353156] border-t border-t-gray-300/40 rounded-b-md">
          <a className="hover:bg-[#5a5586]/40 py-1 px-3 rounded-full text-gray-200" href="">ติดต่อลงโฆษณาพันทิป</a>
        </div>
      </div>
    </div>
  );
};

export default CoWorkPantip;
