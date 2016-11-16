import { combineReducers } from 'redux';
import * as actionType from './constants/actionTypes';
import defaultMembers from './constants/states';

const ModalReducer = (state = { lgShow: false, member: {} }, action) => {
  switch (action.type) {
    case actionType.SHOW_MODAL:
      return { ...state, lgShow: true, title: action.title, member: action.member };

    case actionType.HIDE_MODAL:
    case actionType.ADD_MEMBER:
    case actionType.UPDATE_MEMBER:
      return { ...state, lgShow: false };

    case actionType.HandleOnChange:
      return { ...state,
        member: {
          ...state.member,
          id: state.member.id,
          [action.dom_name]: action.value
        }
      };

    case actionType.HandleRadioSelect:
      return { ...state,
        member: {
          ...state.member,
          id: state.member.id,
          sex: action.sex
        }
      };

    default:
      return state;
  }
};

const OperationReducer = (state = { members: defaultMembers }, action) => {
  switch (action.type) {
    case actionType.DELETE_MEMBER:
      var filterMember = state.members.filter(member => member.id !== action.id);
      return { ...state,
        members: filterMember
      };

    case actionType.ADD_MEMBER:
      return { ...state,
        members: [
          ...state.members,
          action.addMember
        ]
      };

    case actionType.UPDATE_MEMBER:
      var filterMember = state.members.map((member) => {
        var _member = member;
        if (_member.id === action.updateMember.id) {
          _member.name = action.updateMember.name;
          _member.age = action.updateMember.age;
          _member.address = action.updateMember.address;
          _member.sex = action.updateMember.sex;
          _member.isUpdate = action.updateMember.isUpdate;
        }
        return _member;
      });
      return { ...state,
        members: filterMember
      };

    default:
      return state;
  }
};

const reducers = combineReducers({
  ModalReducer,
  OperationReducer
});

export default reducers;
