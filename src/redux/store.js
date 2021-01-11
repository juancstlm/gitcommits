import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './rootreducer';
import _ from 'lodash';

const logger = createLogger();
const middleWares = _.compact([thunk, logger]);
const createStoreWithMiddleWare = applyMiddleware(...middleWares)(createStore);
const store = createStoreWithMiddleWare(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
