import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const BmiCalculator = () => {
  const [NumberBmi, setNumberBmi] = useState(0);
  return (
    <>
      <div className="w-full flex flex-row items-start justify-center gap-5">
        <div>
          <div className="w-[700px]">
            <h1>เครื่องคำนวณหาค่าดัชนีมวลกาย (BMI)</h1>
            <p>
              การหาค่าดัชนีมวลกาย (Body Mass Index : BMI)
              คือเป็นมาตรการที่ใช้ประเมินภาวะอ้วนและผอมในผู้ใหญ่ ตั้งแต่อายุ 20
              ปีขึ้นไป สามารถทำได้โดยการชั่งน้ำหนักตัวเป็นกิโลกรัม
              และวัดส่วนสูงเป็นเซนติเมตร แล้วนำมาหาดัชมีมวลกาย
              โดยใช้โปรแกรมวัดค่าความอ้วนข้างต้น
            </p>
            <p>
              Note. ทฤษฎี การประเมินระดับความอ้วนด้วยสูตรคำนวน BMI
              เป็นการประเมินจากค่าเฉลี่ยเชิงสถิติ
              ผลการคำนวณที่ได้อาจคลาดเคลื่อนจากความเป็นจริง
              โดยเฉพาะผู้ที่ออกกำลังกายเป็นประจำ
              หรือกลุ่มนักเพาะกายที่มีปริมาณกล้ามเนื้อสูง
            </p>
          </div>
          <div>
            <form className="flex flex-col gap-3 w-full mb-5" action="">
              <div>
                <p>น้ำหนักตัว (kg.)</p>
                <input
                  className="border-b border-b-gray-200 w-[700px] h-[60px]"
                  type="number"
                  placeholder="กรอกน้ำหนัก"
                />
              </div>
              <div>
                <p>ส่วนสูง (cm.)</p>
                <input
                  className="border-b border-b-gray-200 w-[700px] h-[60px]"
                  type="number"
                  placeholder="กรอกส่วนสูง"
                />
              </div>
              <div>
                <button className="flex items-center justify-center w-[700px] h-[60px] bg-lime-500 rounded-md p-2">
                  <span className="pr-2">คำนวณ</span> <FaArrowDown size={13} />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="w-full bg-gray-300 rounded-md flex flex-col items-center justify-center p-4 ">
            <div className="border-2 border-white rounded-md w-full text-center px-5 py-10">
              <h3 className="text-xl font-medium opacity-80">BMI</h3>
              <p className="mt-5 text-5xl font-light">{NumberBmi}</p>
            </div>
          </div>
          <div>
            <table class="table-auto w-[700px] my-5">
              <thead>
                <tr>
                  <th className="p-4">BMI kg/m2</th>
                  <th className="p-4">อยู่ในเกณท์</th>
                  <th className="p-4">ภาวะเสี่ยงต่อโรค</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">น้อยกว่า 18.50</td>
                  <td className="p-3">น้ำหนักน้อย / ผอม</td>
                  <td className="p-3">มากกว่าคนปกติ</td>
                </tr>
                <tr>
                  <td className="p-3">ระหว่าง 18.50 - 22.90</td>
                  <td className="p-3">ปกติ (สุขภาพดี)</td>
                  <td className="p-3">เท่าคนปกติ</td>
                </tr>
                <tr>
                  <td className="p-3">ระหว่าง 23 - 24.90</td>
                  <td className="p-3">ท้วม / โรคอ้วนระดับ 1</td>
                  <td className="p-3">อันตรายระดับ 1</td>
                </tr>
                <tr>
                  <td className="p-3">ระหว่าง 25 - 29.90</td>
                  <td className="p-3">อ้วน / โรคอ้วนระดับ 2</td>
                  <td className="p-3">อันตรายระดับ 2</td>
                </tr>
                <tr>
                  <td className="p-3">มากกว่า 30</td>
                  <td className="p-3">อ้วนมาก / โรคอ้วนระดับ 3</td>
                  <td className="p-3">อันตรายระดับ 3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BmiCalculator;
