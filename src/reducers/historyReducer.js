export const HistoryIniState = {
  history: [],
  latestSubmitted: null,
};

export const historyReducer = (state = HistoryIniState, { type, payload }) => {
  switch (type) {
    case "LOAD_HISTORY_SUCCESS":
      return { ...state, history: payload };
    case "SUBMIT_ANSWERS_SUCCESS":
      return { history: [...state.history, payload], latestSubmitted: payload };

    case "CLEAR_LATEST_ANSWER":
      return { ...state, latestSubmitted: null };
    default:
      return state;
  }
};
