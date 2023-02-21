import React from "react";

const History = ({ details, counter }) => {
  return (
    <div className="rounded-lg bg-white text-left shadow-xl transition-all sm:my-3 sm:w-full sm:max-w-lg px-5 py-5 text-sm sm:w-full lg:w-60">
      <p className="font-medium text-xs">ATTEMPT #{counter}</p>
      <p className="text-2xl my-3 font-medium">Score: {details.score}</p>
      <div className="dtime flex justify-between my-3">
        <p className="text-xs">
          Attempt Date: {new Date(details.createdAt).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default History;
