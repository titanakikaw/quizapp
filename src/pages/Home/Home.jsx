import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import History from "../../components/History/history";

const Home = ({ user, history, loadHistory, logOut }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.user) {
      loadHistory(user.user);
    }
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 gap-4 text-center">
        <p className="text-4xl font-medium">Welcome! {user.user.name}</p>
        <div className="grid grid-cols-2 gap-1">
          <Link to="Quiz" className="btn">
            Start Quiz
          </Link>
          <button className="btn bg-red-500" onClick={logOut}>
            Logout
          </button>
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
          {history.history[0] && history.history[0].length != 0 ? (
            history.history[0].map((x, index) => (
              <History key={index} details={x} counter={index + 1} />
            ))
          ) : (
            <p className="text-xs font-light italic text-gray-400 ">
              No history available !
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user, history }) => ({
  user,
  history: history,
});

const mapDispatchToProps = (dispatch) => ({
  loadHistory: (value) =>
    dispatch({
      type: "LOAD_HISTORY_REQUEST",
      payload: value,
    }),
  logOut: () => dispatch({ type: "LOGOUT" }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
