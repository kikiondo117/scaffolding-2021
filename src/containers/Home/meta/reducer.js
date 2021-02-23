import produce from "immer";
import * as constans from "./constants";

export const initialState = {};

export const reducerName = "Home";

const HomeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        break;
    }
  });
