import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CalculatorApp from "./components/CalculatorApp/CalculatorApp";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={darkMode && "dark"}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          <CalculatorApp />
          <ScrollToTop
            smooth
            color="white"
            width="20"
            component={<FaArrowUp />}
            className="flex items-center justify-center bg-gradient-to-br from-lime-500 to-orange-400 hover:scale-110 duration-200 px-2 text-gray-800 text-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default App;
