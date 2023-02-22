import React, { useState } from 'react';

function Poll(props) {
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);

  const handleYesClick = () => {
    setYesVotes(yesVotes + 1);
  };

  const handleNoClick = () => {
    setNoVotes(noVotes + 1);
  };

  const totalVotes = yesVotes + noVotes;

  return (
    <div className="poll-container">
      <h3 className="poll-title">{props.title}</h3>
      <div className="poll-bar-container">
        <div className="poll-bar-yes" style={{ width: `${(yesVotes / totalVotes) * 100}%` }}>
          <span className="poll-bar-votes">{yesVotes}</span>
        </div>
        <div className="poll-bar-no" style={{ width: `${(noVotes / totalVotes) * 100}%` }}>
          <span className="poll-bar-votes">{noVotes}</span>
        </div>
      </div>
      <div className="poll-options-container">
        <button className="poll-option-button-yes" onClick={handleYesClick}>
          <span className="poll-option-button-text">Yes</span>
        </button>
        <button className="poll-option-button-no" onClick={handleNoClick}>
          <span className="poll-option-button-text">No</span>
        </button>
      </div>
    </div>
  );
}

export default Poll;
