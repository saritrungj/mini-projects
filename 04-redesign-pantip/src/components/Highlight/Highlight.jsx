import React from "react";

const highLight = [
  {
    id: 1,
    image:
      "https://ptcdn.info/home_highlight/2024-04/66163588caac0a868e2a5184_tvninul8gl_400.jpg",
    title: "[Pantip Point] ชวนแชร์ภาพความสดชื่นต้อนรับ Summer! 🏖🌞",
  },
  {
    id: 2,
    image:
      "https://ptcdn.info/home_highlight/2022-10/633b8e4a00d01f12500f33e6_hvzb60o1p0_400.jpg",
    title:
      "ชวนรีวิวเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา ซีเบี่ยม เซรั่ม ลุ้น! เซ็ทผลิตภัณฑ์หน้าใสไกลสิว",
  },
  {
    id: 3,
    image:
      "https://ptcdn.info/home_highlight/2024-04/6614b2c5caac0afba45f257f_yo8rqor537_400.jpg",
    title: "🎧PANTIP PODCAST🎧",
  },
  {
    id: 4,
    image:
      "https://ptcdn.info/home_highlight/2024-04/660a5393caac0a0cf70fbdb6_jd6ngnm8xv_400.png",
    title:
      "🌞 พี่แป้งชวนมาแชร์ “บิวตี้ไอเทมคลายร้อน ” ลุ้นรับ Pantip Point และหมวกน้องเพี้ยน ✨",
  },
];

const Highlight = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="px-4 py-4 md:py-8">
          <div className="bg-[#2e2a4b] rounded-md">
            <h1 className="text-xl indent-5 text-[#f4c02d] py-3">Hightlight</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-5 bg-[#353156] rounded-md">
              {highLight?.map((post) => (
                <a href="">
                  <div
                    className="w-full flex flex-col items-center gap-2 bg-[#3c3963] hover:bg-[#2d2a49] rounded-md pb-2"
                    key={post.id}
                  >
                    <div>
                      <img
                        className="rounded-md"
                        src={post.image}
                        alt="postImage"
                      />
                    </div>
                    <p className="line-clamp-1 text-sm text-center text-[#e99f81] mt-2 w-32 md:w-60">
                      {post.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
