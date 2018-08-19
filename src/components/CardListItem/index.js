import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCard, editCard } from '../../actions/cards';
import DropDownPriority from '../DropDown/DropDownPriority';
import DropDownUser from '../DropDown/DropDownUser';
import ClickableButton from '../ClickableButton';
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
      statusInput: props.status_id
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.destroyCard = this.destroyCard.bind(this);
    this.modifyCard = this.modifyCard.bind(this);
    this.changeCard = this.changeCard.bind(this);
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
      case 'status_id':
        this.setState({ statusInput: event.target.value });
        break;
      default:
        break;
    }
  }

  destroyCard(e) {
    this.props.deleteCard(this.props.card_info.id);
  }

  changeCard(e) {
    console.log('state',this.state);
    let card = {
      id: this.props.card_info.id,
      title: this.state.titleInput,
      body: this.state.bodyInput,
      created_by: this.state.createdInput,
      assigned_to: this.state.assignedInput,
      priority_id: this.state.priorityInput,
      status_id: this.state.statusInput
    }
    this.setState({ editable: false });
    this.props.editCard(card);
  }

  modifyCard(e) {
    console.log('props', this.state.props);
    this.setState({ editable: true });
  }

  render() {
    let dropAssign = (
      <DropDownUser
        name="assigned_to"
        value={this.state.assignedInput}
        drop={this.props.users}
        onChange={this.handleInputChange}
      />
    );
    let dropCreated = (
      <DropDownUser
        name="created_by"
        value={this.state.createdInput}
        drop={this.props.users}
        onChange={this.handleInputChange}
      />
    );
    let dropPriority = (
      <DropDownPriority
        name="priority_id"
        value={this.state.priorityInput}
        drop={this.props.priorities}
        onChange={this.handleInputChange}
      />
    );

    let dropStatus = (
      <DropDownPriority
        name="status_id"
        value={this.state.statusInput}
        drop={this.props.status}
        onChange={this.handleInputChange}
      />
    );

    return (
      <div className={`${this.state.status_name}-Card`} key={this.state.card_id}>
        {this.state.editable ? dropStatus : ''}
        {this.state.editable ? (
          <input
            type="text"
            name="title"
            id="title"
            ref={this.focusInput}
            onChange={this.handleInputChange}
            value={this.state.titleInput}
          />
        ) : (
          <h4> {this.props.card_info.title}</h4>
        )}
        {this.state.editable ? (
          <input
            type="text"
            name="body"
            id="body"
            onChange={this.handleInputChange}
            value={this.state.bodyInput}
          />
        ) : (
          <h5 className="body">{this.props.card_info.body} </h5>
        )}
        {this.state.editable ? (
          dropPriority
        ) : (
          <h6>
            PRIORITY:
            {` ${this.props.card_info.priority.name.charAt(0).toUpperCase() +
              this.props.card_info.priority.name.substr(1)}`}
          </h6>
        )}
        {this.state.editable ? (
          dropCreated
        ) : (
          <h5>Assigned by: {`${this.props.card_info.creator.first_name}  ${this.props.card_info.creator.last_name}`} </h5>
        )}
        <div className="bottom">
          <div className="flex-button">
            <ClickableButton label="EDIT" clickHandler={this.modifyCard} />
            <ClickableButton clickHandler={this.destroyCard} label="DELETE" />
            {this.state.editable ? (
              <ClickableButton label="SUBMIT" clickHandler={this.changeCard} />
            ) : (
              ''
            )}
          </div>
          <h5 className="assigned">
            {this.state.editable ? (
              ('Assigned To:', dropAssign)
            ) : (
              <h5>Assigned To: {`${this.props.card_info.assigned.first_name}  ${this.props.card_info.assigned.last_name}`} </h5>
            )}
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
