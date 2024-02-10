import {ALL_PRODUCT} from "../actions/action-types"
const initialState = {
    allProducts: [],
};
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_PRODUCT:
      return {
        ...state,
        allProducts: action.payload,
        // [...state.allProducts, action.payload], 
    };
    default:
        return state;
    }
};

export default Reducer;
