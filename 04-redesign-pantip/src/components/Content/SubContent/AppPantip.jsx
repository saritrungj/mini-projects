import React from "react";

const AppPantip = () => {
  return (
    <div className="flex flex-col w-72 bg-[#2e2a4b] rounded-md">
      <div className="border border-gray-400 rounded-md">
        <div className="flex items-center justify-center gap-4 px-3 py-5">
          <div className="w-16">
            <img
              className="w-full rounded-md"
              src="https://pantip.com/static/images/logo-app_pantip.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <p className="text-gray-400 text-xs">ดาวน์โหลดได้แล้ววันนี้</p>
            </div>
            <div className="flex flex-wrap gap-1">
              <img
              className="w-16"
                src="https://pantip.com/static/images/button_download-app-store.png"
                alt=""
              />
              <img
              className="w-16"
                src="https://pantip.com/static/images/button_download-google-play.png"
                alt=""
              />
              <img
              className="w-16"
                src="https://ptcdn.info/application/huawei-Black.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPantip;
