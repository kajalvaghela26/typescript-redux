import axios from "axios";
import { cartFail, cartSuccess } from "./action";
import { Dispatch } from "redux";
import { CartApplication } from "./actionInterface";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./combineReducer";


export const CartList =  (): ThunkAction<void, RootState,null, CartApplication> => {
    return async (dispatch: Dispatch<CartApplication>): Promise<void>=> {
        try {
        const response =  await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    
           dispatch(cartSuccess(response&&response.data))
       } catch (error) {
          
          dispatch(cartFail(error))
        }
        return undefined as unknown as Promise<void>;
}
    
}