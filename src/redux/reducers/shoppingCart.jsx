import * as t from "../types/shoppingCart";

const initialState = {
  products: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };
    case t.REMOVE_PRODUCT:
      delete state[action.payload];
      return state;
    case t.SET_SHOPPING_CART:
      return action.payload;
    default:
      return state;
  }
};

export default shoppingCartReducer;
