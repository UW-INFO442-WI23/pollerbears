import React, { useState, useEffect } from 'react';
import firebase from '../index';

function Poll(props) {
  const { billId } = props;
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);

  useEffect(() => {
    const db = firebase.firestore();
    const billRef = db.collection("Bills").doc(billId);

    billRef.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        setYesVotes(data.likes || 0);
        setNoVotes(data.dislikes || 0);
      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }, [billId]);

  const handleYesClick = () => {
    const db = firebase.firestore();
    const billRef = db.collection("Bills").doc(billId);

    billRef.update({
      likes: yesVotes + 1,
    }).then(() => {
      setYesVotes(yesVotes + 1);
    }).catch((error) => {
      console.error("Error updating document: ", error);
    });
  };

  const handleNoClick = () => {
    const db = firebase.firestore();
    const billRef = db.collection("Bills").doc(billId);

    billRef.update({
      dislikes: noVotes + 1,
    }).then(() => {
      setNoVotes(noVotes + 1);
    }).catch((error) => {
      console.error("Error updating document: ", error);
    });
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
