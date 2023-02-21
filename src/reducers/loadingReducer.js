export const LoadingInitState = [];

export const loadingReducer = (state = LoadingInitState, { type, payload }) => {
  const match = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);
  if (!match) return state;
  const [, actionType, actionName] = match;
  if (!match) return state;
  if (actionName === "REQUEST") {
    return [
      ...state,
      {
        action: actionType,
      },
    ];
  }
  return state.filter((x) => !(x.action === actionType));
};
