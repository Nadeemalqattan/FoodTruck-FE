import { TvRounded } from "@material-ui/icons";
import * as types from "../types";

const initialState = {
  user: null,
  heatmap: null,
  heatmapLoading: true,
  location: null,
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
      const heatmap = [];
      
      for (let i = 0; i < action.payload.length; ++i) {
        if (action.payload[i].location !== null) {
          heatmap.push({
            lat: action.payload[i].location.coordinates[1],
            lng: action.payload[i].location.coordinates[0],
            weight: 5,
          });
        }
      }
      return {
        ...state,
        heatmap: heatmap,
        heatmapLoading: false,
      };
    case types.UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case types.GET_LOCATION:
      console.log(action.payload);
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
