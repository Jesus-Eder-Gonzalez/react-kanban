import React, { Component } from 'react';
import axios from 'axios';
import logo from '../../logo.svg';
import './App.css';
import KanBanBoard from '../KanBanBoard';
import UserList from '../UserList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      status: [],
      priority: [],
      cards: []
    };
  }

  componentDidMount() {
    axios
      .get('/api/users')
      .then(users => {
        this.setState({ users: users.data });
      })
      .catch(err => {
        console.log(err.message);
      });

    axios
      .get('/api/status')
      .then(stats => {
        console.log('status');
        this.setState({ status: stats.data });
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
        this.setState({ cards: cards.data });
      })
      .catch(err => {
        console.log(err.message);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <KanBanBoard users={this.state.users} status={this.state.status} />
        {/* <UserList users={this.state.users} /> */}
      </div>
    );
  }
}

export default App;
