import { applyMiddleware } from "redux";
import  createStore from "react-redux";
import thunk from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./src/App3";

const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
