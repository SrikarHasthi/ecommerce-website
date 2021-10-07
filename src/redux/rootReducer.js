import { combineReducers } from "redux";
import reducer from "./reducers"
import filterReducer from "./filterReducer"
import searchReducer from "./searchReducer";
import paginationReducer from "./paginationReducer";
let rootReducer = combineReducers({
    data:reducer,
    filter:filterReducer,
    searchValue:searchReducer,
    pagination:paginationReducer,
});
export default rootReducer;
