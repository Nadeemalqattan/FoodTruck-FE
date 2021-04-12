import * as types from "../types";

const initialState = {
  workingHours: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WORKING_HOURS":
      return {
        state,
        workingHours: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
