import React from "react";
import BmiCalculator from "./BmiCalculator";

const CalculatorApp = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="px-4 py-10">
          <div className="h-screen p-3">
            <BmiCalculator />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorApp;
