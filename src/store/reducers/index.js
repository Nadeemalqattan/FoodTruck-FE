import { combineReducers } from "redux";

import authReducer from "./authReducer";
import menu from "./menuReducer";

const rootReducer = combineReducers({ authReducer, menu });

export default rootReducer;
