import React from "react";

const Footer = () => {
  const footerLink = [
    {
      title: "กฏกติกา",
      link: "",
    },
    {
      title: "ลงโฆษณา",
      link: "",
    },
    {
      title: "สมัครงาน",
      link: "",
    },
    {
      title: "ติดต่อทีมงาน",
      link: "",
    },
  ];

  return (
    <div>
      <div>
        <div className="">
          <a
            className="flex items-center justify-center bg-[#2e7d32] 
          hover:bg-[#2b752f] text-white text-sm w-full h-8 rounded-sm"
            href=""
          >
            ข่าวประชาสัมพันธ์
          </a>
        </div>
        <div>
          <ul className="text-[11px] flex gap-2 text-gray-300/50 items-center p-2">
            {footerLink?.map((link, idx) => (
              <>
                <li key={idx}>
                  <a className="text-gray-300 hover:text-gray-100 hover:underline" href={link.link}>{link.title}</a>
                </li>
                {console.log(idx)}
                {idx === 3 ? "" : "|" }
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
