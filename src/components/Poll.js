import React, { useState, useEffect } from 'react';
import firebase from '../index';

function Poll(props) {

  const { billId, userData } = props;
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);
  useEffect(() => {
    const db = firebase.firestore();
    const billRef = db.collection("Bills").doc(billId);

    billRef.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        const check = data.likes2.split(',')
        const check2 = data.dislikes2.split(',')
        setYesVotes(check.length || 0);
        setNoVotes(check2.length || 0);
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
    billRef.get()
  .then((doc) => {
    if (doc.exists) {
      const dislikes = doc.data().dislikes2;
      const currentStringValue = doc.data().likes2;
      const check = currentStringValue.split(',')
      const check2 = dislikes.split(',')

      if(check.some(
        email => email === userData.email
      ) ){
        console.log("error you have already tried voting yes.")

      } 
      
      else if(check2.some(
        email => email === userData.email
      ) ) {
        let newString = check2.filter( email => email !== userData.email).join(',')
        
        billRef.update({
          dislikes2: newString
        })
        .then(() => {
          const count = newString.split(',')
          setNoVotes(count.length);
          const newStringValue = currentStringValue + ','+userData.email;
          billRef.update({
            likes2: newStringValue
          })
          .then(() => {
            const count = newStringValue.split(',')
            setYesVotes(count.length);
            console.log('Swap dislikes/likes sucessfully updated');
          })
          .catch((error) => {
            console.error('Error updating string field:', error);
          });
        })
        .catch((error) => {
          console.error('Error updating string field:', error);
        });
      } else  {
      // Concatenate the new data to the current value
      const newStringValue = currentStringValue + ','+userData.email;

      // Update the field with the new concatenated string
      billRef.update({
        likes2: newStringValue
      })
      .then(() => {
        setYesVotes(check.length);
        console.log('String field updated successfully');
      })
      .catch((error) => {
        console.error('Error updating string field:', error);
      });
    }
    } else {
      console.log('Document not found');
    }
  })
  .catch((error) => {
    console.error('Error getting document:', error);
  });
}

  const handleNoClick = () => {
    const db = firebase.firestore();
    const billRef = db.collection("Bills").doc(billId);
    billRef.get()
  .then((doc) => {
    if (doc.exists) {
      const likes = doc.data().likes2;
      const currentStringValue = doc.data().dislikes2;
      const check = currentStringValue.split(',')
      const check2 = likes.split(',')
      if(check.some(
        email => email === userData.email
      ) ){
        console.log("error you have already tried voting No.")
      }  else if(check2.some(
        email => email === userData.email
      ) ) {
        let newString = check2.filter( email => email !== userData.email).join(',') 
        billRef.update({       
          likes2: newString
        })
        .then(() => {
          const count = newString.split(',')
          setYesVotes(count.length);
          const newStringValue = currentStringValue + ','+userData.email;
          billRef.update({
            dislikes2: newStringValue
          })
          .then(() => {
            const count = newStringValue.split(',')
            setNoVotes(count.length);
            console.log('Swap dislikes/likes sucessfully updated');
          })
          .catch((error) => {
            console.error('Error updating string field:', error);
          })
        })
        .catch((error) => {
          console.error('Error updating string field:', error);
        });
      } else {
      // Concatenate the new data to the current value
      const newStringValue = currentStringValue + ','+userData.email;

      // Update the field with the new concatenated string
      billRef.update({
        dislikes2: newStringValue
      })
      .then(() => {
        setNoVotes(check.length);
        console.log('String field updated successfully');
      })
      .catch((error) => {
        console.error('Error updating string field:', error);
      });
    } 
    } else {
      console.log('Document not found');
    }
  })
  .catch((error) => {
    console.error('Error getting document:', error);
  });
}

let totalVotes = yesVotes + noVotes

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
 // Legacy code
  /*const handleYesClick = () => {
    const db = firebase.firestore();
    const billRef = db.collection("Bills").doc(billId);

    billRef.doc().set({
      likes2: userData.email,
    }).then(() => {
      setYesVotes(billRef.likes2.count());
    }).catch((error) => {
      console.error("Error updating document: ", error);
    });
  };*/

  /*const handleNoClick = () => {
    const db = firebase.firestore();
    const billRef = db.collection("Bills").doc(billId);

    billRef.doc().set({
      dislikes2: userData.email,
    }).then(() => {
      setNoVotes(billRef.dislikes2.count());
    }).catch((error) => {
      console.error("Error updating document: ", error);
    });
  };*/

export default Poll;
