import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from 'redux-thunk';
import rootReducer from '../reducers/index';

const configureStore = (initialState) => {
  const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleWare));

  const store = createStore(rootReducer, initialState, enhancer);

  return store;
};

export default configureStore();
