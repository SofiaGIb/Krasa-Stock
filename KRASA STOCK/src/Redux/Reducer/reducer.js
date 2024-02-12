import {ADD_PRODUCT, ALL_PRODUCT} from "../actions/action-types"
const initialState = {
    allProducts: [],
    products:[]

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
        return{
            ...state

        }
    default:
        return state;
    }
};

export default Reducer;
