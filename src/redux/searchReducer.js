import { SEARCH_SELECTED } from "./constants";

let searchReducer = (state = "", action) => {
  switch (action.type) {
    case SEARCH_SELECTED:
      return action.payload;
    default:
      return state;
  }
};
export default searchReducer;
