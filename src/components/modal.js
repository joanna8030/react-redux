import React from 'react';
import { Modal, Button, form, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { hideModal, insertMember, updateMember } from '../actions';


let ModalDialog = ({ lgShow, hideModal, title, insertMember, member }) => {
  let input_id, input_name, input_age, input_address, input_sex;
  const idFormInput = (title === 'New') ? (<input type='text' ref={input => input_id = input} />) : member.id;

  return (
    <Modal show={lgShow} onHide={() => hideModal()} bsSize='large' aria-labelledby='contained-modal-title-lg'>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-lg'>{title}</Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body>
          ID: {idFormInput} <br /><br />
          Name: <input type='text' name='name' value={member.name} ref={input => { input_name = input }} /><br /><br />
          Age: <input type='text' name='age' value={member.age} ref={input => { input_age = input }} /><br /><br />
          Address: <input type='text' name='address' value={member.address} ref={input => { input_address = input }}/><br /><br />
          <ButtonGroup name='sex' type='radio' value={member.sex}>
            {
              ['male', 'female'].map(sex =>
                <Button key={sex} active={sex === sex}>
                  {sex}
                </Button>
              )
            }
          </ButtonGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={
              () => (title === 'New') ?
              insertMember(input_id.value, input_name.value, input_age.value, input_address.value): updateMember(member.id)
            }>Save
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    lgShow: state.ModalReducer.lgShow,
    title: state.ModalReducer.title,
    member: state.ModalReducer.member
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => { dispatch(hideModal()) },
    insertMember: (id, name, age, address, sex) => { dispatch(insertMember(id, name, age, address, sex)) },
    updateMember: (id) => { dispatch(updateMember(id)) }
  };
};

ModalDialog = connect(mapStateToProps, mapDispatchToProps)(ModalDialog);
export default ModalDialog;

ModalDialog.propTypes = {
  lgShow: React.PropTypes.bool,
  hideModal: React.PropTypes.func,
  title: React.PropTypes.string,
  member: React.PropTypes.object,
  insertMember: React.PropTypes.func
};
