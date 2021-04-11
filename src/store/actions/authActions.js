import instance from "./instance";
import decode from "jwt-decode";
import * as types from "../types";

import { toast } from "react-toastify";

const setUser = (token) => {
  localStorage.setItem("myToken", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

/*-------Sigin-------*/
export const signin = (user) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/foodtruck/signin", user);
      localStorage.setItem("myToken", res.data.token);
      dispatch(setUser(res.data.token));
    } catch (error) {
      console.error(error);
    }
  };
};

/*-------Sigout-------*/
export const signout = () => {
  localStorage.removeItem("myToken");
  delete instance.defaults.headers.common.Authorization;
  return {
    type: types.SET_USER,
    payload: null,
  };
};

/*-------Ftch Food Trucks-------*/
export const fetchFoodTruck = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/foodtruck/user");
      dispatch({
        type: types.FETCH_FOODTRUCK,
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

/*-------Feych Heatmap Users-------*/
export const fetchHeatmap = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/foodtruck/heatmap");
      dispatch({
        type: types.FETCH_HEATMAP,
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

/*-------Uodate Profile-------*/
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

/*-------check For Token-------*/
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

/*-------Get food Trcuk Location-------*/
export const getLocation = (longitude, latitude, foodTruckID) => async (
  dispatch
) => {
  try {
    const res = await instance.put(`foodtruck/location/${foodTruckID}`, {
      longitude,
      latitude,
    });
    dispatch({
      type: types.GET_LOCATION,
      payload: { latitude, longitude },
    });
  } catch (error) {
    console.log(error);
  }
};
