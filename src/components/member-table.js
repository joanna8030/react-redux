import React from 'react';
import { Table, thead, tr, th, tbody } from 'react-bootstrap';
import Member from './member-row';

export default class MemberTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowModal= this.handleShowModal.bind(this);
    this.handleDeleteMember = this.handleDeleteMember.bind(this);
  }

  handleShowModal(title, member){
    this.props.showModal(title, member);
  }
  handleDeleteMember(id){
    this.props.deleteMember(id);
  }
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Sex</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {this.props.members.map(member =>
            <Member
              key={member.id}
              {...member}
              showModal={this.handleShowModal}
              deleteMember={this.handleDeleteMember}
            />
          )}
        </tbody>
      </Table>
      );
  }
};

MemberTable.propTypes = {
  members: React.PropTypes.array
};
