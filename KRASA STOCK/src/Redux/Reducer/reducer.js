import { ADD_PRODUCT, ALL_PRODUCT, PRODUCT_SALE, TOTAL_SALE } from "../actions/action-types";
const initialState = {
  allProducts: [],
  products: [],
  SALE: [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCT:
      return {
        ...state,
        allProducts: action.payload,
        // [...state.allProducts, action.payload],
      };
    case ADD_PRODUCT:
      return {
        ...state,
      };
    case PRODUCT_SALE:
      return {};
    case TOTAL_SALE:
      return {};
    default:
      return state;
  }
};

export default Reducer;
