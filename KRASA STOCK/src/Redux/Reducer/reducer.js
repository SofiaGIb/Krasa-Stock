import { ADD_PRODUCT } from "../actions/action-types/action-types";

const initialState = {
    product: [],
};
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.payload], 
    };
    default:
        return state;
    }
};

export default Reducer;
