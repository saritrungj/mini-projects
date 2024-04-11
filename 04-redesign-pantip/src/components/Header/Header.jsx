import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="px-4  py-4 md:py-8">
          <div className="w-full">
            <div className="">
              <div className="bg-[#2e2a4b] rounded-md">
                <h1 className="text-xl indent-5 text-[#f4c02d] py-3">
                  Announce
                </h1>
                <ul className="flex flex-col bg-[#353156] rounded-md">
                  <li className="hover:bg-[#2a2748]">
                    <a className="flex p-2 md:p-3 gap-2 text-xs md:text-base" href="#">
                      <h2 className="font-semibold text-[#f4c02d] drop-shadow-md ">
                        🎧 Pantip Daily Podcast 🎧
                      </h2>
                      <p className="text-white">
                        3 อันดับกระทู้ฮิตบนพันทิป ประจำวันที่ 9 เมษายน 📊
                      </p>
                    </a>
                  </li>
                  <li className="hover:bg-[#2a2748]">
                    <a className="flex p-2 md:p-3 gap-2 text-xs md:text-base" href="#">
                      <h2 className="font-semibold text-[#f4c02d] drop-shadow-md">
                        Pantip Point 💰
                      </h2>
                      <p className="text-white">
                        ชวนแชร์ภาพความสดชื่นต้อนรับ <span>" SUMMER "</span> 📷🌞
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
