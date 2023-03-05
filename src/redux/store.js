import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducer/userReducer";

const reducers = combineReducers({
  // Add reducers
  user: userReducer,
});

const middleware = [thunk]

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store