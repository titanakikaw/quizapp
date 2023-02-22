import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import History from "../../components/History/history";

const Home = ({ user, answers, loadHistory, logOut, clearLatestAnswer }) => {
  useEffect(() => {
    if (user.user) {
      loadHistory(user.user);
      clearLatestAnswer();
    }
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 gap-4 text-center px-10">
        <div className="header rounded p-5 flex justify-center flex-wrap sm:justify-center md:justify-between bg-white">
          <div className="">
            <p className="text-xs tracking-wide font-medium text-left uppercase">
              Current User:
            </p>
            <p className="text-md font-medium ">{user.user.name}</p>
          </div>

          <button className="btn rounded bg-red-500 px-9" onClick={logOut}>
            Logout
          </button>
        </div>

        <div className="w-full">
          <Link to="Quiz" className="btn rounded bg-green-500 w-full">
            Start Quiz
          </Link>
        </div>

        <hr></hr>
        <h1
          className="text-center text-lg font-medium"
          style={{ textTransform: "uppercase" }}
        >
          Your History
        </h1>
        <div
          className="grid lg:grid-cols-3 sm:grid-cols-2 gap-2 text-center"
          style={{ borderTop: "1px solid black", paddingTop: "1rem" }}
        >
          {answers.history ? (
            answers.history.map((x, index) => {
              return <History key={index} details={x} counter={index + 1} />;
            })
          ) : (
            <p className="text-xs font-light italic text-gray-400 text-center">
              No history available !
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user, answers }) => ({
  user,
  answers,
});

const mapDispatchToProps = (dispatch) => ({
  loadHistory: (value) =>
    dispatch({
      type: "LOAD_HISTORY_REQUEST",
      payload: value,
    }),
  logOut: () => dispatch({ type: "LOGOUT" }),
  clearLatestAnswer: () => {
    dispatch({
      type: "CLEAR_LATEST_ANSWER",
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
