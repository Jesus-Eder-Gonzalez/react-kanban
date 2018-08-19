import React from 'react';
import Header from '../Header';
import CardList from '../CardList';
import NewTaskForm from '../NewTaskForm';
import './Column.css';

const Column = props => {
  let colHeader = props.status.map(status => {
    let newForm = <NewTaskForm />;
    return (
      <div className="Column">
        <Header
          name="Col"
          title={status.name.toUpperCase().replace('_', ' ')}
          rank={status.rank}
        />
        <CardList
          cards={props.cards.filter(card => card.status_id === status.id)}
          name={status.name}
          status_id = {status.id}
        />
        {status.id === 1 ? newForm : ''}
      </div>
    );
  });

  return colHeader;
};

export default Column;
