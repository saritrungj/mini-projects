import { useState } from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Typing } from "react-typing-animate";

const Header = ({ darkMode, setDarkMode }) => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const Links = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "About Project",
      href: "#about",
    },
    {
      title: "BMI Calculator",
      href: "#bmicalculator",
    },
  ];

  return (
    <header className="bg-lime-200 dark:bg-gray-900 text-gray-900 dark:text-white duration-300 border-b-4 border-b-orange-500 dark:border-b-green-500">
      <div className="container mx-auto">
        {/* LINK NAD  */}
        <div className="flex justify-around md:justify-between items-center mx-auto h-24"> 
          <h1 className="text-xl font-bold uppercase">
            <div className="flex items-center justify-between">
              <p>🍉 BMI Calculator</p>
            </div>
          </h1>
          <ul className="hidden md:flex uppercase items-center justify-center">
            {Links?.map((link, idx) => (
              <li
                className={
                  darkMode
                    ? "p-4 text-lg hover:text-green-500 font-md hover:scale-110 duration-200"
                    : "p-4 text-lg hover:text-orange-500 font-md hover:scale-110 duration-200"
                }
                key={idx}
              >
                <a href={link.href}>{link.title}</a>
              </li>
            ))}

            {/* DARKMODE SECTION */}
            <div className="p-4" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <MdWbSunny
                  size={30}
                  className={
                    darkMode
                      ? "hover:text-green-500 cursor-pointer duration-200"
                      : "hover:text-orange-500 cursor-pointer duration-200"
                  }
                />
              ) : (
                <MdNightsStay
                  size={30}
                  className={
                    darkMode
                      ? "hover:text-green-500 cursor-pointer duration-200"
                      : "hover:text-orange-500 cursor-pointer duration-200"
                  }
                />
              )}
            </div>
          </ul>

          {/* MOBILE SCREEN NAVBAR */}
          <div className="block md:hidden" onClick={handleNavigation}>
            {openNavigation ? (
              <AiOutlineClose className="cursor-pointer" size={30} />
            ) : (
              <AiOutlineMenu className="cursor-pointer" size={30} />
            )}
          </div>
          <div
            className={
              darkMode
                ? openNavigation
                  ? "z-10 text-white fixed h-full left-0 top-0 w-[50%] border-r-8 border-r-gray-500 bg-gray-900 ease-in-out duration-500"
                  : "fixed left-[-100%]"
                : openNavigation
                ? "z-10 text-gray-900 fixed h-full left-0 top-0 w-[50%] border-r-8 border-r-lime-300 bg-lime-100 ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <div className="flex items-center justify-between px-5">
              <div className="">
                <h1 className="text-lg font-bold primary-color m-4 uppercase">
                  <p>🍉 BMI Calculator</p>
                </h1>
              </div>
              {/* DARKMODE SECTION */}
              <div className="px-2" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? (
                  <MdWbSunny
                    size={30}
                    className={
                      darkMode
                        ? "hover:text-green-500 cursor-pointer duration-200"
                        : "hover:text-orange-500 cursor-pointer duration-200"
                    }
                  />
                ) : (
                  <MdNightsStay
                    size={30}
                    className={
                      darkMode
                        ? "hover:text-green-500 cursor-pointer duration-200"
                        : "hover:text-orange-500 cursor-pointer duration-200"
                    }
                  />
                )}
              </div>
            </div>

            <ul className="p-8 text-2xl uppercase ">
              {Links?.map((link, idx) => (
                <li
                  className={
                    darkMode
                      ? "p-2 text-lg hover:text-green-500 font-md hover:scale-110 duration-200"
                      : "p-2 text-lg hover:text-orange-500 font-md hover:scale-110 duration-200"
                  }
                  key={idx}
                >
                  <a onClick={() => handleNavigation(false)} href={link.href}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
