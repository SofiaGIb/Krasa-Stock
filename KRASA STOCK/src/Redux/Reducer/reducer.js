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
  allSales :[],
  sales: [],
  foundProducts:[]
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCT:
      return {
        ...state,

        products:action.payload,
        allProducts:action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
       products:action.payload
      };
    case SALE_PRODUCTS:
      return {
        ...state,

        sales:action.payload
      };
case ADD_SALE:
  return {
    ...state,
    sales: [...state.sales, action.payload],

  }

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.name !== action.payload.name)
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
