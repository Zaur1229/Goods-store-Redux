import { ADD_GOOD } from '../constants';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOOD:
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

export default cartReducer;
