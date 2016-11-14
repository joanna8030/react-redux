import React from 'react';
import { Button, tr, td } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteMember, showModal } from '../actions';

let Member = ({ showModal, deleteMember, id, name, age, address, sex, isUpdate }) => {
  const member = {
    id: id,
    name: name,
    age: age,
    address: address,
    sex: sex,
    isUpdate: isUpdate
  };

  return (
    <tr style={{ backgroundColor: (isUpdate === true) ? '#f1f442' : '' }}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{address}</td>
      <td>{sex}</td>
      <td>
        <Button onClick={() => showModal('Update', member)}>Edit</Button>
        <Button onClick={() => deleteMember(id)}>Drop</Button>
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (title, member) => { dispatch(showModal(title, member)); },
    deleteMember: (id) => { dispatch(deleteMember(id)); }
  };
};

Member = connect(mapStateToProps, mapDispatchToProps)(Member);
export default Member;

Member.propTypes = {
  showModal: React.PropTypes.func,
  deleteMember: React.PropTypes.func,
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  age: React.PropTypes.string,
  address: React.PropTypes.string,
  sex: React.PropTypes.string,
  isUpdate: React.PropTypes.bool
};
