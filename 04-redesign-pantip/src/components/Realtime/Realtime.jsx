import React from "react";
import { FaComment, FaPlusSquare } from "react-icons/fa";
const Realtime = () => {
  const realtimePost = [
    {
      title:
        "ชวนรีวิวเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา ซีเบี่ยม เซรั่ม ลุ้น! เซ็ทผลิตภัณฑ์หน้าใสไกลสิว",
      author: "สมาชิกหมายเลข 123456789",
      time: "4 ชั่วโมง",
      comment: 20,
      addbox: 1,
    },
    {
      title:
        "เชียร์สด ! Badminton Asia Championships 2024 : รอบ 16 (11 เม.ย. 67) (คู่แรกเวลา 10.00 น.)",
      author: "สมาชิกหมายเลข 123456789",
      time: "2 ชั่วโมง",
      comment: 16,
      addbox: 1,
    },
    {
      title:
        "สามีมีคนอื่น แต่สุดท้ายเขาเลือกครอบครัว เราพึ่งมารู้เรื่องนี้หลังผ่านไปหลายเดือน",
      author: "สมาชิกหมายเลข 123456789",
      time: "10 เม.ย.",
      comment: 53,
      addbox: 1,
    },
    {
      title:
        "ผู้หญิงหลายคน อยากมีคู่ แต่ก็ไม่เปิดใจคบหาใคร ถามผู้หญิง อายุ 30up อะไรถึงทำให้ไม่เลือกจีบใครก่อน?",
      author: "สมาชิกหมายเลข 123456789",
      time: "9 เม.ย.",
      comment: 59,
      addbox: 1,
    },
    {
      title: "วงการพระกับนักแสดงมีเรื่องมนทิน?",
      author: "สมาชิกหมายเลข 123456789",
      time: "16 ชั่วโมง",
      comment: 34,
      addbox: 1,
    },
    {
      title: "หัวหน้ารับน้องใหม่เข้ามาแต่ให้เราสอนงาน ตรวจงาน",
      author: "สมาชิกหมายเลข 123456789",
      time: "9 เม.ย.",
      comment: 47,
      addbox: 0,
    },
    {
      title: "สั่งงานลูกน้องทางไลน์ อ่านแล้วไม่ตอบ",
      author: "สมาชิกหมายเลข 123456789",
      time: "8 เม.ย.",
      comment: 189,
      addbox: 1,
    },
    {
      title: "ไอลิทกับการโดนเฮทเทรน",
      author: "สมาชิกหมายเลข 123456789",
      time: "2 ชั่วโมง",
      comment: 16,
      addbox: 1,
    },
    {
      title:
        "ควาทสัมพันธ์ที่ผู้ชายทำงานฝ่ายเดียว ผู้หญิงไม่ได้ทำงาน จะทำอย่างไรดี",
      author: "สมาชิกหมายเลข 123456789",
      time: "9 เม.ย.",
      comment: 126,
      addbox: 0,
    },
    {
      title: "คาริน่าลบจดหมายขอโทษออกแล้ว!!",
      author: "สมาชิกหมายเลข 123456789",
      time: "1 ชั่วโมง",
      comment: 8,
      addbox: 1,
    },
  ];

  return (
    <div>
      <div className="container mx-auto">
        <div className="px-4  py-4 md:py-8">
          <div className="bg-[#353156] rounded-md border border-gray-300/40">
            <div className="bg-[#2e2a4b] rounded-md indent-5 py-3">
              <h1 className="text-xl  text-[#f4c02d]">Pantip Realtime</h1>
              <p className="text-xs text-gray-400">
                กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {realtimePost?.map((post, idx) => (
                <div className="border border-gray-300/40 hover:bg-[#2a2748]" key={idx}>
                  <a href="">
                    <div className="flex flex-col justify-between gap-2 p-3">
                      <div>
                        <p className="text-sm text-white">{post.title}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="flex gap-1 text-xs text-gray-200">
                            {post.author} <span className="text-[8px]">•</span>
                            <span className="text-gray-400">{post.time}</span>
                          </p>
                        </div>
                        <div className="flex gap-2 ">
                          <p className="flex gap-2 items-center text-gray-400 text-xs">
                            <FaComment /> {post.comment}
                          </p>
                          <p className="flex gap-2 items-center text-gray-400 text-xs">
                            <FaPlusSquare /> {post.addbox}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
              <div className="grid md:col-span-2 text-center py-3 bg-[#7459c8] rounded-b-md hover:bg-[#8a6fd9] duration-100">
              <a href="" className="text-white text-xs">ดูเพิ่มเติม</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realtime;
