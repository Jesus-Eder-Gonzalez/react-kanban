import React from 'react';
import CardListItem from '../CardListItem';
import './CardList.css';

const CardList = props => {
  return (
    <div className='list'>
      {props.cards.map((card, idx) => {
        return (
          <CardListItem
            card_id = {card.id}
            name={props.name}
            title={card.title}
            body={card.body}
            priority_id={card.priority.name}
            created_by={`${card.creator.first_name} ${card.creator.last_name}`}
            assigned_to={`${card.assigned.first_name}  ${card.assigned.last_name}`}
          />
        );
      })}
    </div>
  );
};

export default CardList;
