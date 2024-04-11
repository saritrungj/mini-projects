import React from 'react'

const Club = () => {
  return (
    <div className="flex flex-col w-72 bg-[#2e2a4b] rounded-md">
      <div className="border border-gray-400 rounded-md">
        <div className="flex items-center justify-between px-4 py-3 w-full rounded-md">
          <h1 className="text-md  text-[#f4c02d]">คลับ</h1>
          <a className="text-sm text-[#7f75d3]" href="">ดูทั้งหมด</a>
        </div>
        <div className="bg-[#353156] rounded-md">
          <ul className=" text-white/80 font-light text-sm flex flex-col">
            
            <li className="border-b border-b-gray-400  py-2 hover:bg-[#2a2748] px-3">
              <a href="">AF 12</a>
            </li>
            <li className="border-b border-b-gray-400  py-2 hover:bg-[#2a2748] px-3">
              <a href="">AF Fan Club</a>
            </li>
            <li className="border-b border-b-gray-400  py-2 hover:bg-[#2a2748] px-3">
              <a href="">BTS & ARMY in Pantip</a>
            </li>
            <li className="border-b border-b-gray-400  py-2 hover:bg-[#2a2748] px-3">
              <a href="">FASHIONISTA CLUB</a>
            </li>
            <li className="py-2 hover:bg-[#2a2748] text-center">
              <a href="">ดูเพิ่มเติม</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Club