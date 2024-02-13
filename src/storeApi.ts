import axios, { AxiosResponse } from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { cartAction } from "./reducer";
import { apiResponse } from "./interfaceFile";

function* apiCall() {
        try {
                const response: AxiosResponse<apiResponse[]> = yield axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
                yield put(cartAction.SuccessCart(response.data))
        } catch (error:any) {
                yield put(cartAction.FailCart(error))
        }
}

export function* defaultApicall() {
        yield takeEvery(cartAction.requestCart, apiCall)
}