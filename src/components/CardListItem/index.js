import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCard } from '../../actions/cards';

import ClickableButton from '../ClickableButton';
import './CardListItem.css';

class CardListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      editable: false,
      name: props.name,
      title: props.title,
      body: props.body,
      created_by: props.created_by,
      assigned_to: props.assigned_to,
      priority_id: props.priority_id,
      status_id: props.status_id,
      card_id: props.card_id
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.destroyCard = this.destroyCard.bind(this);
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
    console.log(this.state.card_id)
    this.props.deleteCard(this.state.card_id);
  }
  // const CardListItem = ({ name, title, body, priority_id, created_by, assigned_to }) => (
  render() {
    return (
      <div className={`${this.state.name}-Card`}>
        <h4> {this.state.title}</h4>
        <h5 className="body">{this.state.body} </h5>
        <h6>
          PRIORITY:{' '}
          {this.state.priority_id}
          {/* .charAt(0).toUpperCase() + priority_id.substr(1) */}
        </h6>
        <h5>Assigned by: {this.state.created_by} </h5>
        <div className="bottom">
          <div className="flex-button">
            <ClickableButton label="EDIT" /> <ClickableButton clickHandler={this.destroyCard} label="DELETE" />
          </div>
          <h5 className="assigned">{this.state.assigned_to} </h5>{' '}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: id => {
      console.log('map', id);
      dispatch(deleteCard(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CardListItem);
