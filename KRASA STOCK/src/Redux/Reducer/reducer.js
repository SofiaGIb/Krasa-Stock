import {
  ADD_PRODUCT,
  ALL_PRODUCT,
  DELETE_PRODUCT,
  FOUND_PRODUCTS,
SOLD_PRODUCTS} from "../actions/action-types";
const initialState = {
  allProducts: [],
  products: [],
  sales: [],
  foundProduct:[]
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
    case SOLD_PRODUCTS:
      return {
        ...state,
        sales: action.payload
      };


    case DELETE_PRODUCT:
      return {
        ...state,
      };
      
      case FOUND_PRODUCTS:
        return {
          ...state,
      products: action.payload
        };
         

    
    default:
      return state;
  }
};

export default Reducer;
