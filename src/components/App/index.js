import React, { Component } from 'react';
import axios from 'axios';
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
    axios
      .get('/api/users')
      .then(users => {
        this.props.loadUsers(users.data);
      })
      .catch(err => {
        console.log(err.message);
      });

    axios
      .get('/api/status/cards')
      .then(status => {
        console.log('status');
        this.props.loadStatus(status.data);
      })
      .catch(err => {
        console.log(err.message);
      });

    axios
      .get('/api/priorities')
      .then(priorities => {
        console.log('priorities');
        this.setState({ priority: priorities.data });
      })
      .catch(err => {
        console.log(err.message);
      });

    axios
      .get('/api/cards')
      .then(cards => {
        console.log('cards');
        this.props.loadCards(cards.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <div className="App">
        <Header title="KANBAN BOARD" />
        <KanBanBoard users={this.props.users} status={this.props.status} />
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
    loadUsers: users => {
      dispatch(loadUsers(users));
    },
    loadCards: cards => {
      dispatch(loadCards(cards));
    },
    loadStatus: status => {
      dispatch(loadStatus(status));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
