import React from "react";
import { connect } from "react-redux";

const FinishAttempt = ({ latestSubmitted }) => {
  return (
    <div className="content flex-1 flex flex-col items-center px-2 sm:px-6 lg:px-40 relative flex h-16 items-center justify-center">
      {latestSubmitted ? (
        <>
          <p
            className="text-sm font-semibold sm:text-3xl text-center"
            style={{ color: "#191D63" }}
          >
            Finished!
          </p>
          <p
            className="text-sm font-semibold sm:text-3xl text-center"
            style={{ color: "#191D63" }}
          >
            Your Score: {latestSubmitted.score}
          </p>
        </>
      ) : (
        <p
          className="text-sm font-semibold sm:text-3xl text-center"
          style={{ color: "#191D63" }}
        >
          {" "}
          Congrats on Finishing the Quiz! Please click the "Finish Attempt" to
          submit
        </p>
      )}

      <div className="choices grid grid-cols-1 gap-2 items-center justify-center my-10"></div>
    </div>
  );
};
const mapStateToProps = ({ history: { latestSubmitted } }) => ({
  latestSubmitted,
});
export default connect(mapStateToProps, null)(FinishAttempt);
