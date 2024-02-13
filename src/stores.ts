import {Action, combineReducers ,ThunkAction, configureStore, createStore, applyMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// import rootReducer from './combineReducer'; 
import rootSaga from './rootSaga';
import reducerCart from "./reducer";
import logger from "redux-logger";

const rootReducer=combineReducers({
    cart: reducerCart
})

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(rootReducer,applyMiddleware(sagaMiddleware,logger))
sagaMiddleware.run(rootSaga);
export type cartDispatch = typeof Store.dispatch;
export type rootState = ReturnType<typeof Store.getState>;
export type AppThunk<ReturnType=void>= ThunkAction<ReturnType,rootState,unknown,Action<string>>
export default Store;