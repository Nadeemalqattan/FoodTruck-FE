import * as types from "../types";

const initialState = {
  user: null,
  heatmap: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.FETCH_FOODTRUCK:
      return {
        ...state,
        profile: action.payload,
      };
    case types.FETCH_HEATMAP:
      return {
        ...state,
        heatmap: action.payload,
      };
    case types.UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    // case types.GET_LOCATION:
    //   return {
    //     ...state,
    //     foodtruck: action.payload,
    //   };
    default:
      return state;
  }
};

export default authReducer;
