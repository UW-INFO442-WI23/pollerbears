import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Comments from './Comments';

function UniqueBill(props) {
  const { billTitle, handleBackClick } = props;

  return (
    <div>
      <div className="uniqueBillHeader">
        <button className="backButton" onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2>{billTitle}</h2>
      </div>
      <Comments billTitle={billTitle} />
    </div>
  );
}

export default UniqueBill;
