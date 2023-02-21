import React from "react";

const Footer = ({ questions, nextQuestion, counter, addFinalAnswer }) => {
  return (
    <div
      className="footer flex items-center lg:flex-row sm:flex-col mx-auto justify-center py-5 w-full"
      style={{ backgroundColor: "#F4F3F6" }}
    >
      {counter + 1 <= questions.length && (
        <div className="progress_bar mx-5 sm:w-64 flex items-center">
          <div
            className="relative w-full h-2 rounded-full flex-1"
            style={{
              backgroundColor: "#EDE8E3",
            }}
          >
            <div
              className="absolute top-0 left-0 h-2 bg-green-500 rounded-full"
              style={{
                width: `${((counter + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
          <p className="text-xs mx-1 font-medium" style={{ color: "#757575" }}>
            {`${counter + 1}/${questions.length}`}
          </p>
        </div>
      )}
      <div className="progress_bar mx-5 sm:w-64">
        {counter === questions.length ? (
          <button
            className="btn rounded w-full"
            onClick={() => addFinalAnswer(questions)}
          >
            Finish Attempt
          </button>
        ) : (
          <button
            className="btn rounded w-full"
            onClick={() => {
              nextQuestion();
            }}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;
