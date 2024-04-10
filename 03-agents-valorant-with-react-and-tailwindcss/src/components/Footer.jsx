import React from 'react'

const Footer = () => {
  return (
    <footer className="min-h-fit flex flex-col justify-start items-center py-5 px-5 text-center bg-gradient-to-br from-orange-500 to-rose-300">
      <p className="max-w-xl font-light text-black">&copy; {new Date().getFullYear()} SARIT RUNGJAPOH. All Rights Reserved. 💖</p>
    </footer>
  )
}

export default Footer