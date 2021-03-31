import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { checkForToken, fetchProfile } from "./actions/authActions";

import reducer from "./reducers";

// Actions

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkForToken());
store.dispatch(fetchProfile());

export default store;
