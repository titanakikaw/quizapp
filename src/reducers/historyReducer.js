export const HistoryIniState = [];

export const historyReducer = (state = HistoryIniState, { type, payload }) => {
  switch (type) {
    case "LOAD_HISTORY_SUCCESS":
      return [...payload];
    default:
      return state;
  }
};
