import * as types from "../types";

const initialState = {
  menu: [],
  category: [],
  loading: true,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;
