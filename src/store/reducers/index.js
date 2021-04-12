import { combineReducers } from "redux";

import authReducer from "./authReducer";
import menuReducer from "./menuReducer";
import workingHoursReducer from "./workingHoursReducer";

const rootReducer = combineReducers({
  authReducer,
  menuReducer,
  workingHoursReducer,
});

export default rootReducer;
