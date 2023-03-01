import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
   // Add reducers
})

const middleware = [thunk]

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store