import { FAIL_CART_CALL, SUCCESS_CART_CALL } from "./constant";

interface CartSuccessAction {
    type: typeof SUCCESS_CART_CALL;
    payload: any; 
  }
  
  interface CartFailAction {
    type: typeof FAIL_CART_CALL;
    payload: any; 
  }
  
  export type CartApplication = CartSuccessAction | CartFailAction;