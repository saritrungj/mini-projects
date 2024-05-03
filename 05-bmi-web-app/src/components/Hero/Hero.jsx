import React from "react";
import heroBanner from "../../assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="px-4 py-10">
          <div className="h-screen flex items-center justify-between">
            <div className="flex flex-col md:flex-col lg:flex-row items-center justify-evenly">
              <div className="w-full flex justify-center p-4">
                <img
                  className="w-[600px] md:w-[700px] h-full md:h-[370px] rounded-md"
                  src={heroBanner}
                  alt="heroBanner"
                />        
              </div>
              <div className="w-full p-3">
                <div className="w-full lg:w-[400px] xl:w-[700px] flex flex-col justify-center">
                  <h1 className="text-2xl md:text-3xl font-bold py-4">
                    🥝 BMI, TDEE และ BMR คืออะไร ?
                  </h1>
                  <div className="text-md md:text-xl font-light">
                    <p>
                      <span className="font-bold">BMI</span> ย่อมาจาก{" "}
                      <span className="font-medium">Body Mass Index</span>{" "}
                      คือเป็นมาตรการที่ใช้ประเมินภาวะอ้วนและผอมในผู้ใหญ่
                      ตั้งแต่อายุ 20 ปีขึ้นไป
                      สามารถทำได้โดยการชั่งน้ำหนักตัวเป็นกิโลกรัม
                      และวัดส่วนสูงเป็นเซนติเมตร แล้วนำมาหาดัชมีมวลกาย
                    </p>
                    <p>
                      <span className="font-bold">BMR</span> ย่อมาจาก{" "}
                      <span className="font-medium">Basal Metabolic Rate</span>
                      หรือเราสามารถเรียกได้ว่าเป็นอัตราการเผาผลาญพลังงานในแต่ละวัน
                      โดยค่าพลังงานนี้ร่างกายจะใช้ในการขับเคลื่อนระบบเเละควบคุมอวัยวะต่างๆ
                      ในร่างกาย
                    </p>
                    <p>
                      <span className="font-bold">TDEE</span> คือ{" "}
                      <span className="font-medium">
                        Total Daily Energy Expenditure
                      </span>{" "}
                      หรือ ค่าของพลังงานที่ใช้กิจกรรมอื่นในแต่ละวัน
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
