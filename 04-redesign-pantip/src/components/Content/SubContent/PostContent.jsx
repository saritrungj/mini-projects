import React from "react";
import pickTopics from "../../../data/pickTopics.json";
import hitzTopics from "../../../data/hitzTopics.json";
import { FaComment } from "react-icons/fa";

const PostContent = () => {
  return (
    <div>
      {/* POST SECTION */}
      <div className="flex flex-col gap-4">
        <div className="bg-[#353156] rounded-md border border-gray-300/40">
          <div className="bg-[#2e2a4b] rounded-md indent-5 py-3">
            <h1 className="text-xl  text-[#f4c02d]">Pantip Pick</h1>
            <p className="text-xs text-gray-400">
              กระทู้คุณภาพคัดเลือกโดยทีมงาน Pantip
            </p>
          </div>
          {pickTopics?.map((post, idx) => (
            <div
              className="border border-gray-300/40 hover:bg-[#2a2748]"
              key={idx}
            >
              <div className="flex flex-col justify-between gap-2 p-3">
                <div>
                  <a href="" className="text-sm text-white">
                    {post.title}
                  </a>
                  <p>
                    {post?.tag?.map((tag, idx) => (
                      <a
                        className="text-xs text-gray-400 hover:text-gray-200"
                        href={tag.tagLink}
                      >
                        {tag.tagTitle}
                      </a>
                    ))}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="flex gap-1 text-xs text-gray-200">
                      {post.author} <span className="text-[8px]">•</span>
                      <span className="text-gray-400">{post.date}</span>
                    </p>
                  </div>
                  <div className="flex gap-2 ">
                    <p className="flex gap-2 items-center text-gray-400 text-xs">
                      <FaComment /> {post.comment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="grid md:col-span-2 text-center py-3 bg-[#7459c8] rounded-b-md hover:bg-[#8a6fd9] duration-100">
            <a href="" className="text-white text-xs">
              ดูเพิ่มเติม
            </a>
          </div>
        </div>

        <div className="bg-[#353156] rounded-md border border-gray-300/40">
          <div className="bg-[#2e2a4b] rounded-md indent-5 py-3">
            <h1 className="text-xl  text-[#f4c02d]">Pantip Hitz</h1>
            <p className="text-xs text-gray-400">
              กระทู้ฮิตติดเทรนด์ทุก 10 นาที
            </p>
          </div>
          {hitzTopics?.map((post, idx) => (
            <div
              className="border border-gray-300/40 hover:bg-[#2a2748]"
              key={idx}
            >
              <div className="flex flex-col justify-between gap-2 p-3">
                <div>
                  <a href="" className="text-sm text-white">
                    {post.title}
                  </a>
                  <p>
                    {post?.tag?.map((tag, idx) => (
                      <a
                        className="text-xs text-gray-400 hover:text-gray-200"
                        href={tag.tagLink}
                      >
                        {tag.tagTitle}
                      </a>
                    ))}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="flex gap-1 text-xs text-gray-200">
                      {post.author} <span className="text-[8px]">•</span>
                      <span className="text-gray-400">{post.date}</span>
                    </p>
                  </div>
                  <div className="flex gap-2 ">
                    <p className="flex gap-2 items-center text-gray-400 text-xs">
                      <FaComment /> {post.comment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="grid md:col-span-2 text-center py-3 bg-[#7459c8] rounded-b-md hover:bg-[#8a6fd9] duration-100">
            <a href="" className="text-white text-xs">
              ดูเพิ่มเติม
            </a>
          </div>
        </div>
      </div>
      {/* END POST SECTION */}
    </div>
  );
};

export default PostContent;
