import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/users';
import { loadCards } from '../../actions/cards';
import { loadStatus } from '../../actions/status';
import { loadPriorities } from '../../actions/priorities';
import './App.css';
import KanBanBoard from '../KanBanBoard';
import Header from '../Header';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadStatus();
    this.props.loadCards();
    this.props.loadUsers();
    this.props.loadPriorities();
  }

  render() {
    return (
      <div className="App">
        <Header title="KANBAN BOARD" label="+ NEW TASK" />
        <KanBanBoard
          cards={this.props.cards}
          status={this.props.status}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersList,
    cards: state.cardsList,
    status: state.statusList,
    priorities: state.priorityList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUsers: () => {
      dispatch(loadUsers());
    },
    loadCards: () => {
      dispatch(loadCards());
    },
    loadStatus: () => {
      dispatch(loadStatus());
    },
    loadPriorities: () => {
      dispatch(loadPriorities());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
