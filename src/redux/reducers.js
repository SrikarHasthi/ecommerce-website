import { ADD_TO_CART, REMOVE_FROM_CART} from "./constants";
import {productdata} from "../config";
let initial_state = productdata.map((e) => {
  return { ...e,qty:0 };
});
let reducer = (state =initial_state, action) => {
  let cp = [];
  let id = -1;
  switch (action.type) {
    case ADD_TO_CART:
      cp = state.map((el) => el);
      id = action.payload - 1;
      cp[id].qty = cp[id].qty + 1;
      return cp;

    case REMOVE_FROM_CART:
      cp = state.map((el) => el);
      id = action.payload - 1;
      if (cp[id].qty > 0) cp[id].qty = cp[id].qty - 1;
      return cp;

    default:
      return state;
  }
};

export default reducer;
