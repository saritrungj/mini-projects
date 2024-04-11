import React from "react";
import PostContent from "./SubContent/PostContent";
import TagHits from "./SubContent/TagHits";
import FristPantipCamp from "./SubContent/FristPantipCamp";
import Club from "./SubContent/Club";
import SecondPantipCamp from "./SubContent/SecondPantipCamp";
import Bloggang from "./SubContent/Bloggang";
import ThirdPantipCamp from "./SubContent/ThirdPantipCamp";
import PantipMarket from "./SubContent/PantipMarket";
import FourthPantipCamp from "./SubContent/FourthPantipCamp";
import CoWorkPantip from "./SubContent/CoWorkPantip";
import AppPantip from "./SubContent/AppPantip";
import Footer from "./SubContent/Footer";

const Content = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="px-4 py-4 md:py-8">
          <div className="flex items-center justify-end">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="grid col-span-3">
                <PostContent />
                <div className="flex flex-col items-center my-4 gap-4 border border-gray-300/50 p-6 md:p-4 rounded-sm">
                <div>
                  <h2 className="text-gray-300 text-xl">อุ๊ย! หมดแล้วเหรอ?</h2>
                </div>
                <div>
                  <a className="bg-[#8a6fdc] hover:bg-[#ad98ed] duration-300 p-2 rounded-sm text-white" href="">โหลดหน้านี้ใหม่เพื่อดูข้อมูลล่าสุด</a>
                </div>
              </div>
              </div>
              <div className="w-72 hidden md:flex md:flex-col gap-4">
                <TagHits />
                <FristPantipCamp />
                <Club />
                <SecondPantipCamp />
                <Bloggang /> 
                <ThirdPantipCamp />
                <PantipMarket />
                <FourthPantipCamp />
                <CoWorkPantip />
                <AppPantip />
                <Footer />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
