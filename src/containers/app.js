import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import ModalDialog from '../components/modal';
import { showModal, hideModal, deleteMember, insertMember, updateMember, handleOnChange, handleRadioSelect } from '../actions';
import MemberTable from '../components/member-table';

// @connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
  render() {
    return (
      <div>
        <Button bsStyle='primary' onClick={() => this.props.showModal('New', {})} >New</Button>
        <MemberTable members={this.props.members} showModal={this.props.showModal} deleteMember={this.props.deleteMember} />
        <ModalDialog
          lgShow={this.props.lgShow}
          title={this.props.title}
          member={this.props.member}
          hideModal={this.props.hideModal}
          insertMember={this.props.insertMember}
          updateMember={this.props.updateMember}
          handleOnChange={this.props.handleOnChange}
          handleRadioSelect={this.props.handleRadioSelect}
         />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    members: state.OperationReducer.members,
    lgShow: state.ModalReducer.lgShow,
    member: state.ModalReducer.member,
    title: state.ModalReducer.title
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (title, member) => { dispatch(showModal(title, member)); },
    hideModal: () => { dispatch(hideModal()); },
    deleteMember: (id) => { dispatch(deleteMember(id)); },
    insertMember: (id, name, age, address, sex) => { dispatch(insertMember(id, name, age, address, sex)); },
    updateMember: (id, name, age, address, sex) => { dispatch(updateMember(id, name, age, address, sex)); },
    handleOnChange: (name, value) => { dispatch(handleOnChange(name, value)); },
    handleRadioSelect: (sex) => { dispatch(handleRadioSelect(sex)); }
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

App.propTypes = {
  showModal: React.PropTypes.func,
  lgShow: React.PropTypes.bool,
  members: React.PropTypes.array,
  deleteMember: React.PropTypes.func
};
