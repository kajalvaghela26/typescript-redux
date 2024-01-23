import { combineReducers } from "redux";
import reducerCart from "./reducer";

const rootReducer = combineReducers({ cart: reducerCart })
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;