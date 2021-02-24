import produce from 'immer';
import * as constans from './constants';

export const initialState = {
  nani: '',
};

export const homeReducerName = 'Home';

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constans.TEST:
        draft.nani = 'nani';
        break;
      default:
        break;
    }
  });

export { homeReducer };
