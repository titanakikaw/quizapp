import React, { useEffect, useState } from "react";
import Options from "../Options/options";

const Question = ({ question, setAnswer }) => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="content flex-1 flex flex-col items-center px-2 sm:px-6 lg:px-40 relative flex h-16 items-center justify-center">
      <p
        className="text-sm font-semibold sm:text-3xl"
        style={{ color: "#191D63" }}
      >
        {question?.text}
      </p>
      <div className="choices grid grid-cols-1 gap-2 items-center justify-center my-10">
        {question?.choices.map((x, index) => (
          <Options
            key={index}
            choice={x}
            selected={selected}
            setSelected={setSelected}
            setAnswer={setAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
