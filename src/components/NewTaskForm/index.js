import React, { Component } from 'react';
import ClickableButton from '../ClickableButton';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cards';

import './NewTaskForm.css';
import DropDownUser from '../DropDown/DropDownUser';
import DropDown from '../DropDown';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: '',
      bodyInput: '',
      createdInput: '',
      assignedInput: '',
      priorityInput: ''
    };
    this.focusInput = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
  }

  handleInputChange(event) {
    switch (event.target.id) {
      case 'title':
        this.setState({ titleInput: event.target.value });
        break;
      case 'body':
        this.setState({ bodyInput: event.target.value });
        break;
      case 'created_by':
        this.setState({ createdInput: event.target.value });
        break;
      case 'assigned_to':
        this.setState({ assignedInput: event.target.value });
        break;
      case 'priority_id':
        this.setState({ priorityInput: event.target.value });
        break;
      default:
        break;
    }
  }

  addNewCard(e) {
    const data = {};
    data.title = this.state.titleInput;
    data.body = this.state.bodyInput;
    data.created_by = this.state.createdInput;
    data.assigned_to = this.state.assignedInput;
    data.priority_id = this.state.priorityInput;
    data.status_id = 1;
    this.props.addCard(data);
    this.setState({
      titleInput: '',
      bodyInput: '',
      createdInput: '',
      assignedInput: '',
      priorityInput: ''
    });
    this.focusInput.current.focus();
  }

  render() {
    let assignedDropDown = (
      <DropDownUser
        name="assigned_to"
        value={this.state.assignedInput}
        drop={this.props.users}
        onChange={this.handleInputChange}
      />
    );
    let createdDropDown = (
      <DropDownUser
        name="created_by"
        value={this.state.createdInput}
        drop={this.props.users}
        onChange={this.handleInputChange}
      />
    );

    let priorityDropDown = (
      <DropDown
        name="priority_id"
        value={this.state.priorityInput}
        drop={this.props.priorities}
        onChange={this.handleInputChange}
      />
    );
    // const customStyles = { backgroundColor: 'red' };

    return (
      <div className="NewTaskForm-container">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            ref={this.focusInput}
            onChange={this.handleInputChange}
            value={this.state.titleInput}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <input
            type="text"
            name="body"
            id="body"
            onChange={this.handleInputChange}
            value={this.state.bodyInput}
          />
        </div>
        <div>
          <label htmlFor="created_by">Created By:</label>
          {createdDropDown}
        </div>
        <div>
          <label htmlFor="assigned_to">Assigned To:</label>
          {assignedDropDown}
        </div>
        <div>
          <label htmlFor="priority_id">Priority:</label>
          {priorityDropDown}
        </div>
        <div className="button">
          <ClickableButton
            label="Add Task"
            clickHandler={this.addNewCard}
            customStyles={{ backgroundColor: 'grey', fontSize: '1rem', width: '90%', marginTop: '.5rem'}}
          />
        </div>
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
    addCard: card => {
      dispatch(addCard(card));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTaskForm);
