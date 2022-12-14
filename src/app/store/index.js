import { createStore } from "redux";
import { devToolsEnhancer } from '@redux-devtools/extension';
import stopwatchReducer from "./reducers";

const store = createStore(
    stopwatchReducer,
    devToolsEnhancer()
);

export default store;