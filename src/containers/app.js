import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import ModalDialog from '../components/modal';
import { showModal } from '../actions';
import MemberTable from '../components/member-table';

// @connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
  render() {
    return (
      <div>
        <Button bsStyle='primary' onClick={() => this.props.showModal('New', {})} >New</Button>
        <MemberTable members={this.props.members} showModal={() => this.props.showModal()} />
        <ModalDialog onHide={this.props.lgShow} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    members: state.OperationReducer.members,
    lgShow: state.ModalReducer.lgShow
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (title, {}) => { dispatch(showModal(title, {})); },
    deleteMember: (title, {}) => { dispatch(deleteMember(title, {})); }
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

App.propTypes = {
  showModal: React.PropTypes.func,
  lgShow: React.PropTypes.bool,
  members: React.PropTypes.array
};
