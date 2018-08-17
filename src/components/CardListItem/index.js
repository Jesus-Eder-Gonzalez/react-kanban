import React from 'react';
import './CardListItem.css';
const CardListItem = ({ name, title, body, priority_id, created_by, assigned_to }) => (
  <div className={`${name}-Card`}>
    <h4> {title}</h4>
    <h5 className='body'>{body} </h5>
    <h6>PRIORITY: {priority_id.charAt(0).toUpperCase()+priority_id.substr(1)} </h6>
    <h5>Assigned by: {created_by} </h5>
    <h5 className='assigned'>{assigned_to} </h5>
  </div>
);

export default CardListItem;
