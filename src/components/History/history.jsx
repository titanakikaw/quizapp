import React from "react";

const History = () => {
  return (
    <div className="rounded-lg bg-white text-left shadow-xl transition-all sm:my-3 sm:w-full sm:max-w-lg px-5 py-5 text-sm sm:w-full lg:w-60">
      <p>Attempt #1</p>
      <p className="text-2xl my-3 font-medium">Score : 53</p>
      <div className="dtime flex justify-between my-3">
        <p className="text-xs">
          Time:
          <br /> 8:00 am
        </p>
        <p className="text-xs">
          Date:
          <br /> Feb 12, 2020
        </p>
      </div>
    </div>
  );
};

export default History;
