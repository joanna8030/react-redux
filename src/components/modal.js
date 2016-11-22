import React from 'react';
import { Modal, Button, form, ButtonGroup } from 'react-bootstrap';

export default class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleRadioSelect = this.handleRadioSelect.bind(this);
    this.insertMember = this.insertMember.bind(this);
    this.updateMember = this.updateMember.bind(this);
  }
  handleOnChange(e) {
    this.props.handleOnChange(e.target.name, e.target.value);
  }
  handleRadioSelect(sex) {
    this.props.handleRadioSelect(sex);
  }
  insertMember() {
    this.props.insertMember(this.inputId.value, this.props.member.name, this.props.member.age, this.props.member.address, this.props.member.sex);
  }
  updateMember() {
    this.props.updateMember(this.props.member.id, this.props.member.name, this.props.member.age, this.props.member.address, this.props.member.sex);
  }
  render() {
    const { member, lgShow, title } = this.props;
    const idFormInput = (title === 'New') ? (<input type='text' ref={input => this.inputId = input} />) : this.props.member.id;
    const insertOrUpdate = (title === 'New') ? this.insertMember : this.updateMember;
    return (
      <Modal show={lgShow} onHide={this.props.hideModal} bsSize='large' aria-labelledby='contained-modal-title-lg'>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-lg'>{title}</Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            ID: {idFormInput} <span id='warning' hidden>id should be unique!</span><br /><br />
            Name: <input type='text' name='name' value={member.name} onChange={this.handleOnChange} /><br /><br />
            Age: <input type='text' name='age' value={member.age} onChange={this.handleOnChange} /><br /><br />
            Address: <input type='text' name='address' value={member.address} onChange={this.handleOnChange} /><br /><br />
            <ButtonGroup name='sex' type='radio' value={member.sex} onChange={this.handleOnChange} >
              {
                ['male', 'female'].map(sex =>
                  <Button key={sex} active={member.sex === sex} onClick={() => this.handleRadioSelect(sex)}>
                    {sex}
                  </Button>
                )
              }
            </ButtonGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={insertOrUpdate} >
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}


ModalDialog.propTypes = {
  lgShow: React.PropTypes.bool,
  hideModal: React.PropTypes.func,
  title: React.PropTypes.string,
  member: React.PropTypes.object,
  insertMember: React.PropTypes.func,
  handleOnChange: React.PropTypes.func,
  updateMember: React.PropTypes.func,
  handleRadioSelect: React.PropTypes.func
};
