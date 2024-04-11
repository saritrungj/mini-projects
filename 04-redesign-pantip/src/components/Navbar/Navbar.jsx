import React from "react";
import bannerImage from "../../assets/Navbar/logo-white.png";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#2e2a4b]">
        <div className="container mx-auto">
          <div className="px-4 py-6">
            <div className="flex items-center justify-between ">
              <div>
                <a href="">
                  <img
                    className="w-14 md:w-16"
                    src={bannerImage}
                    alt="logoImage"
                  />
                </a>
              </div>
              <div className="hidden md:block md:w-[500px]">
                <input
                  className="font-medium p-2 w-full rounded-full indent-5  shadow-lg shadow-black/20"
                  type="text"
                  placeholder="ค้นหาบน Pantip"
                />
              </div>
              <div className="font-medium">
                <ul className="flex items-center gap-2 md:gap-4">
                  <li>
                    <a className="text-white md:p-2 rounded-full" href="#">
                      ตั้งกระทู้
                    </a>
                  </li>
                  <li>
                    <a className="text-white md:p-2 rounded-full" href="#">
                      คอมมูนิตี้
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-2 bg-white border-2 border-gray-300 px-2 py-1 rounded-full"
                      href="#"
                    >
                      <GiHamburgerMenu className="md:hidden w-5 h-5" />
                      <span className="md:block hidden">
                        เข้าสู่ระบบ/สมัครสมาชิก
                      </span>
                      <FaUserCircle className="w-7 h-7" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center my-4 md:hidden">
              <div className="md:hidden w-[400px]">
                <input
                  className="font-medium p-2 w-full rounded-full indent-5 shadow-lg shadow-black/20"
                  type="text"
                  placeholder="ค้นหาบน Pantip"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
