import React from 'react'
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import valoBanner from '../assets/valorant-banner.png'

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header>
      <nav className="flex justify-between items-center p-5">
        <a target="_blank" href="https://github.com/saritrungj/mini-projects/tree/main/03-agents-valorant-with-react-and-tailwindcss">
          <div className="flex items-center gap-1 bg-gradient-to-br from-orange-400 to-rose-400 p-2 rounded-lg text-white hover:shadow-md hover:shadow-orange-500/70 hover:-translate-y-2 duration-500 cursor-pointer">
            <img className="w-8" src={valoBanner} alt="banner" />
            <h1 className="text-xs uppercase">ValoAgent</h1>
          </div>
        </a>
        <h1 className="uppercase hidden md:block text-2xl font-bold">Valorant Agents with Valorant API</h1>
        <div onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode
              ? <MdWbSunny size={30} color="#fb7185" className="hover:scale-125 duration-500 text-2xl cursor-pointer" />
              : <MdNightsStay size={30} color="#fb7185" className="hover:scale-125 duration-500 text-2xl cursor-pointer" />
          }
        </div>
      </nav>
    </header>
  )
}

export default Header