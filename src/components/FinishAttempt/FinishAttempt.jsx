import React from "react";
import { connect } from "react-redux";

const FinishAttempt = () => {
  return (
    <div className="content flex-1 flex flex-col items-center px-2 sm:px-6 lg:px-40 relative flex h-16 items-center justify-center">
      <p
        className="text-sm font-semibold sm:text-3xl text-center"
        style={{ color: "#191D63" }}
      >
        Congrats on Finishing the Quiz! Please click the "Finish Attempt" to
        submit
      </p>
      <div className="choices grid grid-cols-1 gap-2 items-center justify-center my-10"></div>
    </div>
  );
};
const mapStateToProps = ({ history }) => {};
export default connect(null, null)(FinishAttempt);
