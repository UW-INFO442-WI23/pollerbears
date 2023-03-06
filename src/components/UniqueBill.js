import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Comments from './Comments';
import Poll from './Poll';
import firebase from '../index';

function UniqueBill(props) {
  const { billId, billTitle, billText, handleBackClick } = props;
  const [pollData, setPollData] = useState({ yes: 0, no: 0 });

  // We're using the `billId` prop to get the Firestore document reference
  const billRef = firebase.firestore().collection('Bills').doc(billId);
  const commentsRef = billRef.collection('Comments');

  useEffect(() => {
    billRef.get().then((doc) => {
      if (doc.exists) {
        const poll = doc.data().poll || { yes: 0, no: 0 };
        setPollData(poll);
      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }, [billRef]);

  const handlePollClick = (option) => {
    // We're using a Firestore transaction to update the poll data atomically
    firebase.firestore().runTransaction((transaction) => {
      return transaction.get(billRef).then((billDoc) => {
        if (!billDoc.exists) {
          throw "Bill document does not exist!";
        }
        const poll = billDoc.data().poll || { yes: 0, no: 0 };
        poll[option]++;
        transaction.update(billRef, { poll });
        return poll;
      });
    }).then((poll) => {
      // We're updating the state only after the transaction succeeds
      setPollData(poll);
    }).catch((error) => {
      console.error("Error updating document: ", error);
    });
  };

  return (
    <div>
      <div className="uniqueBillHeader">
        <button className="button" onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2>{billTitle}</h2>
        <p>{billText}</p>
      </div>
      <Poll billId={billId} pollData={pollData} handlePollClick={handlePollClick} />
      <Comments billId={billId} commentsRef={commentsRef} />
    </div>
  );
}

export default UniqueBill;
