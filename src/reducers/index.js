import { combineReducers } from 'redux';
import usersList from './usersList';
import cardsList from './cardsList';
import statusList from './statusList';
import priorityList from './priorityList';

export default combineReducers({
  usersList,
  cardsList,
  statusList,
  priorityList
});
