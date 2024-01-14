
import { REQUEST_CART_CALL } from "./constant";
import {PayloadAction} from '@reduxjs/toolkit'

interface stateTypeDefine{
  menuList: (string|number)[],
}
const initialState:stateTypeDefine = {
    menuList: []
}
type cartAction = {
  type: typeof REQUEST_CART_CALL
}
const reducerCart = (state : stateTypeDefine=initialState, action:PayloadAction<cartAction>) => {
  switch (action.type)
  {
    case REQUEST_CART_CALL:
      return{...state,menuList:action.payload}
  }
}
export default reducerCart
