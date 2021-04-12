import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { checkForToken } from "./actions/authActions";
import { fetchMenu } from "./actions/menuActions";

import reducer from "./reducers";

// Actions

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkForToken());

export default store;
