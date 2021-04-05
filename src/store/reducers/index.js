import { combineReducers } from "redux";

import authReducer from "./authReducer";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers({ authReducer, menuReducer });

export default rootReducer;
