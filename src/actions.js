import * as actionType from './constants/actionTypes';

//Modal control
export const showModal = (title, member) => {
  return {
    type: actionType.SHOW_MODAL,
    lgShow: true,
    title: title,
    member: member
  };
};

export const hideModal = () => {
  return {
    type: actionType.HIDE_MODAL,
    lgShow: false
  };
};

//Data control
export const insertMember = (id, name, age, address, sex) => {
  const addMember = {
    id: id,
    name: name,
    age: age,
    address: address,
    sex: sex,
    isUpdate: false
  };
  return {
    type: actionType.ADD_MEMBER,
    addMember: addMember
  };
};

export const deleteMember = (id) => {
  return {
    type: actionType.DELETE_MEMBER,
    id: id
  };
};

export const updateMember = (id) => {
  return {
    type: actionType.UPDATE_MEMBER,
    id: id,
    isUpdate: true
  };
};
