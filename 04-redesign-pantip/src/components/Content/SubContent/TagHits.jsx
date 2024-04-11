import React from 'react'

const TagHits = () => {
  return (
    <div className="flex flex-col w-72 bg-[#2e2a4b] rounded-md">
      <div className="border border-gray-400 rounded-md">
        <div className="bg-[#353156] indent-5 py-3 w-24 rounded-md">
          <h1 className="text-md  text-[#f4c02d]">แท็กฮิต</h1>
        </div>
        <div className="bg-[#353156] rounded-md">
          <ul className=" text-white/80 font-light text-sm flex flex-col indent-5">
            <li className="border-b border-b-gray-400  py-2 hover:bg-[#2a2748]">
              <a href="">BABYMONSTER (นักร้องนักดนตรี)</a>
            </li>
            <li className="border-b border-b-gray-400  py-2 hover:bg-[#2a2748]">
              <a href="">ฟุตบอลไทย</a>
            </li>
            <li className="border-b border-b-gray-400  py-2 hover:bg-[#2a2748]">
              <a href="">วันพีซ One piece</a>
            </li>
            <li className="border-b border-b-gray-400  py-2 hover:bg-[#2a2748]">
              <a href="">ลมเล่นไฟ (ละคร)</a>
            </li>
            <li className="border-b border-b-gray-400  py-2 hover:bg-[#2a2748]">
              <a href="">ธี่หยด (ภาพยนตร์ไทย)</a>
            </li>
            <li className="border-b border-b-gray-400  py-2 hover:bg-[#2a2748]">
              <a href="">ละครโทรทัศน์</a>
            </li>
            <li className="border-b border-b-gray-400  py-2 hover:bg-[#2a2748]">
              <a href="">ปัญหาชีวิต</a>
            </li>
            <li className="border-b border-b-gray-400  py-2 hover:bg-[#2a2748]">
              <a href="">BEC (ช่อง 3)</a>
            </li>
            <li className="border-b border-b-gray-400  py-2 hover:bg-[#2a2748]">
              <a href="">ดวงใจเทวพรหม (ละคร)</a>
            </li>
            <li className="py-2 hover:bg-[#2a2748]">
              <a href="">CGM48</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TagHits