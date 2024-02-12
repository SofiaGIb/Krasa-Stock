import { ADD_PRODUCT,PRODUCT_SALE,POST_TOTAL,ALL_PRODUCT } from "../action-types"
import axios from "axios";


export const allProduct = ()=>{
    return async function (dispatch) 
    {
        try {
            const json = await axios.get("http://localhost:3001/products");
            const data = json.data;
            return dispatch({
                type:ALL_PRODUCT,
                payload :data,

            })
        } 
        catch (error) {
            console.log(error);
            alert (error.response.data.error);
        }
    }
}
export const postProduct =(payload)=>{

    return async function (dispatch){
        try {
            const response = await axios.post("http://localhost:3001/products",payload)
            return dispatch({
                type:ADD_PRODUCT,
                payload:response.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}