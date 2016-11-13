import { combineReducers } from 'redux';
import * as actionType from './constants/actionTypes';
import defaultMembers from './constants/states';

const ModalReducer = (state = { lgShow: false, member: {} }, action) => {
  switch (action.type) {
    case actionType.SHOW_MODAL:
      return Object.assign({}, state, {
        lgShow: true,
        title: action.title,
        member: action.member
      });
    case actionType.HIDE_MODAL:
      return Object.assign({}, state, {
        lgShow: false
      });
    default:
      return state;
  }
};

const OperationReducer = (state = { members: defaultMembers }, action) => {
  switch (action.type) {
    case actionType.DELETE_MEMBER:
      var filterMember = state.members.filter(member => member.id !== action.id);
      return Object.assign({}, state, {
        members: filterMember
      });

    case actionType.ADD_MEMBER:
      // var addMember = state.members;
      // addMember.push(action.addMember);
      // return Object.assign({}, state, {
      //   members: addMember
      // });
      return Object.assign({}, state, {
        members: [
          ...state.members,
          action.addMember
        ] });

    case actionType.UPDATE_MEMBER:
      return Object.assign({}, state, {
      });

    default:
      return state;
  }
};

const reducers = combineReducers({
  ModalReducer,
  OperationReducer
});

export default reducers;
