import React, { Component } from 'react';
import ClickableButton from '../ClickableButton';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cards';
import './NewTaskForm.css';
class NewCardForm extends Component {
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
      case 'priority':
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
    data.priorityInput = this.state.priorityInput;
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
    const customStyles = { backgroundColor: 'red' };
    return (
      <div className="NewCardForm-container">
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
          <input
            type="text"
            name="created_by"
            id="created_by"
            onChange={this.handleInputChange}
            value={this.state.createdInput}
          />
        </div>
        <div>
          <label htmlFor="assigned_to">Assigned To:</label>
          <input
            type="text"
            name="assigned_to"
            id="assigned_to"
            onChange={this.handleInputChange}
            value={this.state.assignedInput}
          />
        </div>
        <div>
          <label htmlFor="priority">Priority:</label>
          <input
            type="text"
            name="priority"
            id="priority"
            onChange={this.handleInputChange}
            value={this.state.priorityInput}
          />
        </div>

        <ClickableButton
          label="Add Task"
          clickHandler={this.addNewCard}
          customStyles={{ backgroundColor: 'grey' }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard: card => {
      dispatch(addCard(card));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewCardForm);
