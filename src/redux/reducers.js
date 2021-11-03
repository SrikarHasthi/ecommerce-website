import { ADD_TO_CART, REMOVE_FROM_CART,SET_DATA} from "./constants";
let reducer = (state =[], action) => {
  let cp = [];
  let id = -1;
  switch (action.type) {
    case SET_DATA:
      let data=action.payload
      let finalData=data.map((e)=>{
        return {...e,"qty":0}});
      return finalData;

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
