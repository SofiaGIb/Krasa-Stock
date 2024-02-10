import { ADD_PRODUCT,PRODUCT_SALE,POST_TOTAL,ALL_PRODUCT } from "../action-types"
import axios from "axios";


export const allProduct = ()=>{
    return async function (dispatch) 
    {
        try {
            const json = await axios.get("http://localhost:3001/products");
            console.log(json);
            const data = json.data;
            console.log(json.data);
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