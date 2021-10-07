import { FILTER_SELECTED } from "./constants";

let filterReducer=(state="All Items",action)=>{
    switch(action.type){
        case FILTER_SELECTED:
            return action.payload;
        default:
            return state;
    }
}
export default filterReducer;