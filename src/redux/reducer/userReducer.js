const initialState = {
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // REGISTER_USER
    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        userInfo: action.payload,
        error: null,
      };
    case "USER_REGISTER_FAILURE":
      return {
        loading: false,
        error: action.payload,
      };

    //LOGIN_USER
    case "USER_LOGIN_REQUEST":
      return {
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        loading: false,
        userInfo: action.payload,
        error: null,
      };
    case "USER_LOGIN_FAILURE":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
