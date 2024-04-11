import React from 'react'

const PantipMarket = () => {
  return (
    <div className="flex flex-col w-72 bg-[#2e2a4b] rounded-md">
      <div className="border border-gray-400 rounded-md">
        <div className="flex items-center justify-between w-full rounded-md">
          <img
            src="https://pantip.com/static/images/header_pantipmarket_300x50.png"
            alt=""
          />
        </div>
        <div className="bg-[#353156] rounded-md">
          <ul className=" text-white/80 font-light text-sm flex flex-col">
            <li className="flex gap-2 border-b border-b-gray-400  py-2 hover:bg-[#2a2748] px-3">
              <div>
                <img
                  className="w-14 rounded-md mx-2"
                  src="https://droold.com/wp-content/uploads/2015/09/MiP-robot-servers0.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between">
                <a className="text-sm" href="">
                  หุ่นยนต์ 1/1
                </a>
                <a className="hover:underline text-xs text-gray-400" href="">
                  ของสะสม
                </a>
              </div>
            </li>
            <li className="flex gap-2 border-b border-b-gray-400  py-2 hover:bg-[#2a2748] px-3">
              <div>
                <img
                  className="w-14 rounded-md mx-2"
                  src="https://www.livingpop.com/wp-content/uploads/2019/11/3-1200x960.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between">
                <a href="">เสื้อดำ</a>
                <a className="hover:underline text-xs text-gray-400" href="">
                  ของสะสม
                </a>
              </div>
            </li>
            <li className="flex gap-2 border-b border-b-gray-400  py-2 hover:bg-[#2a2748] px-3">
              <div>
                <img
                  className="w-14 rounded-md mx-2"
                  src="https://www.livingpop.com/wp-content/uploads/2019/11/3-1200x960.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between">
                <a href="">เสื้อขาว</a>
                <a className="hover:underline text-xs text-gray-400 " href="">
                  ของสะสม
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
  )
}

export default PantipMarket