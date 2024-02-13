import { all, fork } from "redux-saga/effects";
import {defaultApicall} from "./storeApi";

export default function* rootSaga(){
    yield all([fork(defaultApicall)])
}