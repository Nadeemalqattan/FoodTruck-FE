import * as types from "../types";

const initialState = {
  workingHours: [],
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WORKING_HOURS":
      const sorter = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 0,
      };

      action.payload.sort((a, b) => {
        let day1 = a.days.toLowerCase();
        let day2 = b.days.toLowerCase();
        return sorter[day1] - sorter[day2];
      });
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
        id: action.payload.id,
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
