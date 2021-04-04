import instance from "./instance";
import decode from "jwt-decode";
import * as types from "../types";

const setUser = (token) => {
  localStorage.setItem("myToken", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const signin = (user, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", user);
      localStorage.setItem("myToken", res.data.token);
      dispatch(setUser(res.data.token));
      alert("Successfully signed in");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signout = () => {
  localStorage.removeItem("myToken");
  delete instance.defaults.headers.common.Authorization;
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/foodtruck/user");
      dispatch({
        type: types.FETCH_PROFILE,
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateProfile = (updatedProfile) => {
  return async (dispatch) => {
    try {
      const res = await instance.put(
        `/foodtruck/${updatedProfile.id}`,
        updatedProfile
      );
      dispatch({
        type: types.UPDATE_PROFILE,
        payload: res.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const checkForToken = () => (dispatch) => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime <= user.exp) {
      dispatch(setUser(token));
    } else {
      localStorage.removeItem("myToken");
      dispatch(signout());
    }
  }
};

export const getLocation = (longitude, latitude,foodTruckID) => async (dispatch) => {
  try {
    const res = await instance.put(`foodtruck/location/${foodTruckID}`, { longitude, latitude });
  } catch (error) {
    console.log(error);
  }
};
