import React from "react";

const Bloggang = () => {
  return (
    <div className="flex flex-col w-72 bg-[#2e2a4b] rounded-md">
      <div className="border border-gray-400 rounded-md">
        <div className="flex items-center justify-between w-full rounded-md">
          <img
            src="https://pantip.com/static/images/header_bloggang_300x50.png"
            alt=""
          />
        </div>
        <div className="bg-[#353156] rounded-md">
          <ul className=" text-white/80 font-light text-sm flex flex-col">
            <li className="flex gap-2 border-b border-b-gray-400  py-2 hover:bg-[#2a2748] px-3">
              <div>
                <img
                  className="w-14 rounded-md mx-2"
                  src="https://www.bloggang.com/data/n/napas/picture/1712491032.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between">
                <a className="text-sm" href="">
                  come from away
                </a>
                <a className="hover:underline text-xs text-gray-400" href="">
                  แวดวงสมาชิก
                </a>
              </div>
            </li>
            <li className="flex gap-2 border-b border-b-gray-400  py-2 hover:bg-[#2a2748] px-3">
              <div>
                <img
                  className="w-14 rounded-md mx-2"
                  src="https://www.bloggang.com/template/theme/11/images/avatar.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between">
                <a href="">mitsubishihaiduong</a>
                <a className="hover:underline text-xs text-gray-400" href="">
                  แวดวงสมาชิก
                </a>
              </div>
            </li>
            <li className="flex gap-2 border-b border-b-gray-400  py-2 hover:bg-[#2a2748] px-3">
              <div>
                <img
                  className="w-14 rounded-md mx-2"
                  src="https://www.bloggang.com/data/r/rsszly/picture/1709698459.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between">
                <a href="">มินิรีวิวที่รองแก้วน้องเพี้ยน</a>
                <a className="hover:underline text-xs text-gray-400 " href="">
                  แวดวงสมาชิก
                </a>
              </div>
            </li>
            <li className="py-2 hover:bg-[#2a2748] text-center">
              <a href="">ดูเพิ่มเติม</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bloggang;
