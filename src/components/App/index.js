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
    this.state = {
      showNewTask: false
    };
    this.showTask = this.showTask.bind(this);
  }

  showTask(e) {
    this.setState({ showNewTask: this.state.showNewTask ? false : true });
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
        <Header title="KANBAN BOARD" label="+ NEW TASK" onChange={this.showTask} />
        <KanBanBoard
          cards={this.props.cards}
          status={this.props.status}
          showTask={this.state.showNewTask}
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
