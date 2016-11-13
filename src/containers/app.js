import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import ModalDialog from '../components/modal';
import { showModal } from '../actions';
import MemberTable from '../components/member-table';

let App = ({ showModal, lgShow }) => {
  return (
    <div>
      <Button bsStyle='primary' onClick={() => showModal('New', {})} >New</Button>
      <MemberTable />
      <ModalDialog onHide={lgShow} />
    </div>
)};

const mapStateToProps = (state) => {
  return {
    members: state.OperationReducer.members,
    lgShow: state.ModalReducer.lgShow
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (title, {}) => { dispatch(showModal(title, {})) }
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
App.propTypes = {
  showModal: React.PropTypes.func
};
