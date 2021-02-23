import { initialState } from 'containers/Home/meta/reducer';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducer';

import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const createStore = (initial_state) => {
  return createStore(
    rootReducer,
    applyMiddleware(...middlewares),
    initial_state
  );
};

sagaMiddleware.run(rootSaga);

export { createStore };
