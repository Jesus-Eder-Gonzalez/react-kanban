import React from 'react';
import CardListItem from '../CardListItem';
import './CardList.css';

const CardList = props => {
  return (
    <div className="list">
      {props.cards.map(card => {
        return (
          <CardListItem
            card_info= {card}
            key={card.id}
            status_name={props.name}
            status_id = {props.status_id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
