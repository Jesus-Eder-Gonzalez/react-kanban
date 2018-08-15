import React, { Component } from 'react';
import axios from 'axios';
import logo from '../../logo.svg';
import './App.css';
import UserList from '../UserList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
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
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
