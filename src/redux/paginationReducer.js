import { PAGINATION } from "./constants";
let initial_state = {
  numberOfPages: 1,
  currPage: 1,
};
let paginationReducer = (state = initial_state, action) => {
  switch (action.type) {
    case PAGINATION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default paginationReducer;
