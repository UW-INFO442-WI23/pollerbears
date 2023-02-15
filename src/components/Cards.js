import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faScroll, faVoteYea } from '@fortawesome/free-solid-svg-icons';


const Card = ({ title }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default Card;
