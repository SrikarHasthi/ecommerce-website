import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FILTER_SELECTED,
  SEARCH_SELECTED,
  PAGINATION,
} from "./constants";

export const addCreator = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};

export const removeCreator = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const filterCreater = (filter) => {
  return {
    type: FILTER_SELECTED,
    payload: filter,
  };
};
export const searchCreater = (value) => {
  return {
    type: SEARCH_SELECTED,
    payload: value,
  };
};
export const paginationCreater = (obj) => {
  return {
    type: PAGINATION,
    payload: obj,
  };
};
