import * as types from "../types";

const initialState = {
  workingHours: [],
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WORKING_HOURS":
      return {
        ...state,
        workingHours: action.payload,
        loading: false,
      };
    case "EDIT_WORKING_HOURS":
      const index = state.workingHours.findIndex(
        (workingDay) => workingDay.id === action.payload.id
      );

      const newWorkingState = [...state.workingHours];
      newWorkingState[index] = {
        days: action.payload.days,
        openTime: action.payload.openTime,
        closeTime: action.payload.closeTime,
      };
      return {
        ...state,
        workingHours: newWorkingState,
      };
    default:
      return state;
  }
};

export default authReducer;
