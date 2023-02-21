export const HistoryIniState = {
  history: [],
  latestSubmitted: null,
};

export const historyReducer = (state = HistoryIniState, { type, payload }) => {
  switch (type) {
    case "LOAD_HISTORY_SUCCESS":
      return { ...state, history: [payload] };
    case "ADD_ANSWER_SUCCESS":
      return { history: [...state.history, payload], latestSubmitted: payload };
    default:
      return state;
  }
};
