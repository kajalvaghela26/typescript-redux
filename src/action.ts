import { FAIL_CART_CALL, REQUEST_CART_CALL, SUCCESS_CART_CALL } from "./constant";


export const cartRequest = (payload:any) => ({
    type:REQUEST_CART_CALL,
    payload,
})

export const cartSuccess = (payload:any) => ({
    type:SUCCESS_CART_CALL,
    payload,
})

export const cartFail = (error:any) => ({
    type:FAIL_CART_CALL,
    payload:error,
})