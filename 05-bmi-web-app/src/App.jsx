import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from 'react-icons/fa'
import Header from "./components/Header/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <div className={darkMode && "dark"}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <ScrollToTop
          smooth
          color="white"
          width="20"
          component={<FaArrowUp />}
          className="flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-400 hover:scale-110 duration-200 px-2 text-white text-2xl" />
      </div>
    </>
  );
};

export default App;
