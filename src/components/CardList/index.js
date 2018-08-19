import React from 'react';
import CardListItem from '../CardListItem';
import './CardList.css';

const CardList = props => {
  return (
    <div className="list">
      {props.cards.map(card => {
        return (
          <CardListItem
            key={card.id}
            card_id={card.id}
            status_name={props.name}
            status_id = {props.status_id}
            title={card.title}
            body={card.body}
            priority_name={card.priority.name}
            priority_id = {card.priority.id}
            created_by={`${card.creator.first_name} ${card.creator.last_name}`}
            created_id = {card.creator.id}
            assigned_to={`${card.assigned.first_name}  ${card.assigned.last_name}`}
            assigned_id = {card.assigned.id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
