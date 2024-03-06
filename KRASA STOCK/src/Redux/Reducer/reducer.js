import {
  ADD_PRODUCT,
  ADD_SALE,
  ALL_PRODUCT,
  DELETE_PRODUCT,
  FOUND_PRODUCTS,
SALE_PRODUCTS,
NEW_AMOUNT} from "../actions/action-types";
const initialState = {
  allProducts: [],
  products: [],
  sales: [],
  foundProducts:[]
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCT:
      return {
        ...state,
        allProducts: action.payload,
        products:action.payload
        // [...state.allProducts, action.payload],
      };
    case ADD_PRODUCT:
      return {
        ...state,
      };
    case SALE_PRODUCTS:
      return {
        ...state,
        sales: action.payload
      };
case ADD_SALE:
  return {
    ...state,
    sales:action.payload

  }

    case DELETE_PRODUCT:
      return {
        ...state,
      };
      
      case FOUND_PRODUCTS:
        return {
          ...state,
      foundProducts: action.payload
        };
         
case NEW_AMOUNT:
  return {
    ...state 
  }
    
    default:
      return state;
  }
};

export default Reducer;
