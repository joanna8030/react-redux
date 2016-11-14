import React from 'react';
import { Modal, Button, form, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { hideModal, insertMember, updateMember, handleOnChange, handleRadioSelect } from '../actions';


let ModalDialog = ({ lgShow, hideModal, title, insertMember, member, handleOnChange, updateMember, handleRadioSelect }) => {
  let inputId, inputName, inputAge, inputAddress, inputSex;
  const idFormInput = (title === 'New') ? (<input type='text' ref={input => inputId = input} />) : member.id;

  return (
    <Modal show={lgShow} onHide={() => hideModal()} bsSize='large' aria-labelledby='contained-modal-title-lg'>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-lg'>{title}</Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body>
          ID: {idFormInput} <br /><br />
          Name: <input type='text' name='name' value={member.name} ref={input => { inputName = input }} onChange={(e) => handleOnChange('name', e)} /><br /><br />
          Age: <input type='text' name='age' value={member.age} ref={input => { inputAge = input }} onChange={(e) => handleOnChange('age', e)} /><br /><br />
          Address: <input type='text' name='address' value={member.address} ref={input => { inputAddress = input }} onChange={(e) => handleOnChange('address', e)} /><br /><br />
          <ButtonGroup name='sex' type='radio' value={member.sex} onChange={(e) => handleRadioSelect('sex',e)} >
            {
              ['male', 'female'].map(sex =>
                <Button key={sex} active={member.sex === sex} onClick={(e) => handleRadioSelect(sex)}>
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
              insertMember(inputId.value, inputName.value, inputAge.value, inputAddress.value, member.sex): updateMember(member.id, inputName.value, inputAge.value, inputAddress.value, member.sex)
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
    updateMember: (id, name, age, address, sex) => { dispatch(updateMember(id, name, age, address, sex)) },
    handleOnChange: (name, value) =>{ dispatch(handleOnChange(name, value)) },
    handleRadioSelect: (sex) => {dispatch(handleRadioSelect(sex))}
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
