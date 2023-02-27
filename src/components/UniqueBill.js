import React, { useState, useEffect } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Comments from './Comments';
import Poll from './Poll';

function UniqueBill(props) {
  const { billTitle, billText, key, handleBackClick } = props;
  const [pollData, setPollData] = useState({ yes: 0, no: 0 });

  const handlePollClick = (option) => {
    setPollData((prevState) => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  return (
    <div>
      <div className="uniqueBillHeader">
        <button className="backButton" onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2>{billTitle}</h2>
        <p>{billText}</p>
      </div>
      <Poll pollData={pollData} handlePollClick={handlePollClick} />
      <Comments billTitle={billTitle} />
    </div>
  );
}

export default UniqueBill;
