import React from 'react';
import { Table, thead, tr, th, tbody } from 'react-bootstrap';
import { connect } from 'react-redux';
import Member from './member-row';
import { insertMember } from '../actions';

let MemberTable = ({ members }) => {
  console.log(members);
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
        {members.map(member =>
          <Member
            key={member.id}
            {...member} />
        )}
      </tbody>
    </Table>
    );
};

const mapStateToProps = (state) => {
  return {
    members: state.OperationReducer.members
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

MemberTable = connect(mapStateToProps, mapDispatchToProps)(MemberTable);
export default MemberTable;

MemberTable.propTypes = {
  members: React.PropTypes.Object
};
