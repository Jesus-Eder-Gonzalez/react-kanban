import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/users';
import { loadCards } from '../../actions/cards';
import { loadStatus } from '../../actions/status';
import './App.css';
import KanBanBoard from '../KanBanBoard';
import Header from '../Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priority: []
    };
  }

  componentDidMount() {
    this.props.loadStatus();
    this.props.loadCards();
    this.props.loadUsers();
    // this.props.loadPriorities();
    // axios
    //   .get('/api/priorities')
    //   .then(priorities => {
    //     console.log('priorities');
    //     this.setState({ priority: priorities.data });
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   });
  }

  render() {
    console.log(this.props.cards);
    return (
      <div className="App">
        <Header title="KANBAN BOARD" label="+ NEW TASK" />
        <KanBanBoard cards={this.props.cards} status={this.props.status} users={this.props.users}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersList,
    cards: state.cardsList,
    status: state.statusList
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
