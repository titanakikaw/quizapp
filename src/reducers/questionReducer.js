export const QuesInitState = [];

export const questReducer = (state = QuesInitState, { type, payload }) => {
  switch (type) {
    case "LOAD_QUESTIONS_SUCCESS":
      return [...payload];

    default:
      return state;
  }
};
