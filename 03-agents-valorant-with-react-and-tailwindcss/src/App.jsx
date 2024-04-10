import { useState } from "react"
import Agents from "./components/Agents"
import Header from "./components/Header"
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <div className={darkMode && "dark"}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Agents />
          <Footer />
          <ScrollToTop
            smooth
            color="white"
            width="20"
            component={<FaArrowUp />}
            className="flex items-center justify-center bg-gradient-to-br from-orange-500 to-rose-400 shadow-md shadow-black/50 hover:scale-110 duration-200 px-2 text-white text-2xl" />
        </div>
      </div>
    </>
  )
}

export default App
