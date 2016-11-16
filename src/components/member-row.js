import React from 'react';
import { Button, tr, td } from 'react-bootstrap';

export default class Member extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleDeleteMember = this.handleDeleteMember.bind(this);
  }

  handleShowModal() {
    const member = {
      id: this.props.id,
      name: this.props.name,
      age: this.props.age,
      address: this.props.address,
      sex: this.props.sex,
      isUpdate: this.props.isUpdate
    };
    this.props.showModal('Update', member);
  }
  handleDeleteMember() {
    this.props.deleteMember(this.props.id);
  }
  render() {
    const { id, name, age, address, sex, isUpdate } = this.props;

    return (
      <tr style={{ backgroundColor: (isUpdate === true) ? '#f1f442' : '' }}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{address}</td>
        <td>{sex}</td>
        <td>
          <Button onClick={this.handleShowModal}>Edit</Button>
          <Button onClick={this.handleDeleteMember}>Drop</Button>
        </td>
      </tr>
    );
  }

}

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
