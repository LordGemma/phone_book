import { combineReducers } from 'redux';
import { usersReducer as users } from './users';
import { modalReducer as modal } from './modal';


const rootReducer = combineReducers({
  users,
  modal,
});

export default rootReducer;
