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
        <CardList cards={status.cards} name={status.name} />
        {status.id === 1 ? newForm : ''}
      </div>
    );
  });

  return colHeader;
};

export default Column;
