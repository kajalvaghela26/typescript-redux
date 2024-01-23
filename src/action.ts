import { CartApplication } from "./actionInterface";
import { FAIL_CART_CALL, SUCCESS_CART_CALL } from "./constant";

export const cartSuccess = (payload: any):CartApplication => {
    console.log('payload', payload)
    return ({
    type:SUCCESS_CART_CALL,
    payload,
})}

export const cartFail = (error:any):CartApplication => ({
    type:FAIL_CART_CALL,
    payload:error,
})