import produce from 'immer';
import * as constans from './constants';

export const initialState = {
  nani: '',
};

export const reducerName = 'Home';

const HomeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constans.TEST:
        draft.nani = 'nani';
        return null;
      default:
        break;
    }
  });

export { HomeReducer };
