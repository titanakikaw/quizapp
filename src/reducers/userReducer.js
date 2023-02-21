export const UserInitState = {
  accessToken: "",
  user: null,
};

export const userReducer = (state = UserInitState, { type, payload }) => {
  switch (type) {
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", JSON.stringify(payload));
      return { ...payload };

    case "LOGOUT": {
      localStorage.removeItem("token");
      return state;
    }
    default:
      return state;
  }
};
