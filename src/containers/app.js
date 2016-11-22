/* eslint react/no-unused-prop-types: 0 */
/* eslint no-class-assign: 0 */
/* eslint arrow-body-style: 0 */
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
          onChange={this.props.handleOnChange}
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
  lgShow: React.PropTypes.bool,
  members: React.PropTypes.shape({
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    age: React.PropTypes.string,
    address: React.PropTypes.string,
    sex: React.PropTypes.string,
    isUpdate: React.PropTypes.bool
  }),
  title: React.PropTypes.string,
  member: React.PropTypes.shape({
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    age: React.PropTypes.string,
    address: React.PropTypes.string,
    sex: React.PropTypes.string
  }),
  showModal: React.PropTypes.func,
  hideModal: React.PropTypes.func,
  deleteMember: React.PropTypes.func,
  insertMember: React.PropTypes.func,
  updateMember: React.PropTypes.func,
  handleOnChange: React.PropTypes.func,
  handleRadioSelect: React.PropTypes.func
};
