import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCard, editCard } from '../../actions/cards';
import DropDown from '../DropDown';
import DropDownUser from '../DropDown/DropDownUser';
import ClickableButton from '../ClickableButton';
import TextInput from '../TextInput';
import HandleInputChange from '../HandleInputChange';
import './CardListItem.css';

class CardListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      status_id: props.status_id,
      status_name: props.status_name,
      titleInput: props.card_info.title,
      bodyInput: props.card_info.body,
      createdInput: props.card_info.creator.id,
      assignedInput: props.card_info.assigned.id,
      priorityInput: props.card_info.priority.id,
      statusInput: props.status_id,
      cardTextColor: { queue: '#de851b', in_progress: '#709f42', done: '#A29D97' }
    };

    this.handleInputChange = HandleInputChange.bind(this);
    this.destroyCard = this.destroyCard.bind(this);
    this.modifyCardState = this.modifyCardState.bind(this);
    this.changeCard = this.changeCard.bind(this);
  }

  destroyCard(e) {
    this.props.deleteCard(this.props.card_info.id);
  }

  changeCard(e) {
    console.log('state', this.state);
    let card = {
      id: this.props.card_info.id,
      title: this.state.titleInput,
      body: this.state.bodyInput,
      created_by: this.state.createdInput,
      assigned_to: this.state.assignedInput,
      priority_id: this.state.priorityInput,
      status_id: this.state.statusInput
    };
    this.setState({ editable: false });
    this.props.editCard(card);
  }

  modifyCardState(e) {
    this.setState({ editable: true });
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

    let statusDropDown = (
      <DropDown
        name="status_id"
        value={this.state.statusInput}
        drop={this.props.status}
        onChange={this.handleInputChange}
      />
    );
    console.log(this.props.card_info);
    let buttonStyle = {
      fontSize: '1rem',
      backgroundColor: 'transparent',
      color: this.state.cardTextColor[this.props.status_name],
      border: '0'
    };
    let buttonStyleSubmit = {
      fontSize: '1rem',
      backgroundColor: 'transparent',
      color: this.state.cardTextColor[this.props.status_name],
      border: '0'
      // border: `1px solid ${this.state.cardTextColor[this.props.status_name]}`
    };
    return (
      <div className={`${this.state.status_name}-Card`} key={this.state.card_id}>
        {this.state.editable ? <h4> Status: {statusDropDown} </h4> : ''}
        {this.state.editable ? (
          <h4>
            Title:
            <TextInput
              name="title"
              focus={this.focusInput}
              onChange={this.handleInputChange}
              input={this.state.titleInput}
            />
          </h4>
        ) : (
          <h4> {this.props.card_info.title}</h4>
        )}

        {this.state.editable ? (
          <h5 className="body">
            Body:
            <TextInput
              name="body"
              onChange={this.handleInputChange}
              input={this.state.bodyInput}
            />
          </h5>
        ) : (
          <h5 className="body">{this.props.card_info.body}</h5>
        )}

        <h6>
          PRIORITY:
          {this.state.editable
            ? priorityDropDown
            : ` ${this.props.card_info.priority.name.charAt(0).toUpperCase() +
                this.props.card_info.priority.name.substr(1)}`}
        </h6>
        <h5>
          Assigned by:
          {this.state.editable
            ? createdDropDown
            : `${this.props.card_info.creator.first_name}  ${
                this.props.card_info.creator.last_name
              }`}
        </h5>
        <div className="bottom">
          <div className="flex-button">
            <ClickableButton
              label="EDIT"
              clickHandler={this.modifyCardState}
              customStyles={buttonStyle}
            />
            <ClickableButton
              clickHandler={this.destroyCard}
              label="DELETE"
              customStyles={buttonStyle}
            />
            {this.state.editable ? (
              <ClickableButton
                label="SUBMIT"
                clickHandler={this.changeCard}
                customStyles={buttonStyleSubmit}
              />
            ) : (
              ''
            )}
          </div>
          <h5 className="assigned">
            Assigned To:
            {this.state.editable
              ? assignedDropDown
              : ` ${this.props.card_info.assigned.first_name}  ${
                  this.props.card_info.assigned.last_name
                }`}
          </h5>
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
    deleteCard: id => {
      dispatch(deleteCard(id));
    },
    editCard: card => {
      dispatch(editCard(card));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardListItem);
