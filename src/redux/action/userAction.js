import axios from "axios";

export const register = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_REGISTER_REQUEST",
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://reqres.in/api/register",
      {
        email,
        password,
      },
      config
    );
    console.log(data);
    dispatch({
      type: "USER_REGISTER_SUCCESS",
      payload: {
        id: data.id,
        email,
        token: data.token,
      },
    });
  } catch (error) {

    dispatch({
      type: "USER_REGISTER_FAIL",
      payload: error,
    });
  }
};


// LOGIN ACTION 

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://reqres.in/api/login",
      {
        email,
        password,
      },
      config
    );
    console.log(data);
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: {
        email,
        token: data.token,
      },
    });
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload: error,
    });
  }
};
