import { combineReducers } from "redux";

import user from "./authReducer";
import menu from "./menuReducer";

const rootReducer = combineReducers({ user, menu });

export default rootReducer;
