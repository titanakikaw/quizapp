export const HistoryIniState = [];

export const historyReducer = (state = HistoryIniState, { type, payload }) => {
  switch (type) {
    case "LOAD_HISTORY_SUCCESS":
      return [...payload];
    case "ADD_ANSWER_SUCCESS":
      return [...state, payload];
    default:
      return state;
  }
};
