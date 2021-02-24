import { combineReducers } from 'redux';
import { homeReducer, homeReducerName } from 'containers/Home/meta/reducer';

const rootReducer = combineReducers({
  [homeReducerName]: homeReducer,
});

export { rootReducer };
