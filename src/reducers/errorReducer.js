export const ErrorInitState = [];

export const errorReducer = (state = ErrorInitState, { type, payload }) => {
  const match = /(.*)_(REQUEST|FAIL)/.exec(type);
  if (!match) return state;
  const [, actionType, actionName] = match;
  if (actionName === "FAIL") {
    return [
      ...state,
      {
        action: actionType,
        payload,
      },
    ];
  }
  return state.filter((x) => !(x.action === actionType));
};
