import { createStore } from "redux";

// Define the initial state for the cart
const initialState = {
  cartItems: [],
};

// Create the reducer function to handle actions
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(cartReducer);

export default store;
