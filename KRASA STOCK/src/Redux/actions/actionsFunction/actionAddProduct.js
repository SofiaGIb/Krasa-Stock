import { ADD_PRODUCT } from "../action-types/action-types"



const addProduct = (name,details,amount)=>{
    return {
        type : ADD_PRODUCT,
        payload : {
            name : name ,
            details : details ,
            amount : amount
        },
    };
};

export default addProduct;