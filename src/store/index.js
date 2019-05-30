import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        logger,
      ),
    ),
  );
}

export default configureStore;
