
import { FAIL_CART_CALL, SUCCESS_CART_CALL } from "./constant";
import { CartApplication } from "./actionInterface";

interface CartState {
  menuList: any; 
}
const initialState:CartState = {
    menuList: null
}

  
const reducerCart = (state = initialState, action:CartApplication) => {
  switch (action.type)
  {
    // case REQUEST_CART_CALL:
    //   return { ...state, menuList: action.payload }
    case SUCCESS_CART_CALL:
      return { ...state, menuList: action.payload }
      case FAIL_CART_CALL:
      return { ...state, menuList: action.payload }
    default:
      return state
  }
}
export default reducerCart
