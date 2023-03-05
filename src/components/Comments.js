import React, { useState, useEffect } from 'react';
import firebase from '../index';

const Comments = () => {
  const ref = firebase.firestore().collection('Comments');
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);
  const [commentList, setCommentList] = useState([]);

  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const comments = [];
      querySnapshot.forEach((doc) => {
        comments.push(doc.data());
      });
      setdata(comments);
      setloader(false);
      const newComments = comments.map((newComment) => ({
        username: newComment.username,
        profilePic: 'https://via.placeholder.com/50x50',
        comment: newComment.newComment,
      }));
      setCommentList(newComments);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  const [newComment, setNewComment] = useState('');
  const [username, setusername] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setusername(user.displayName);
      }
    });
  }, []);

  function addComment(newDataObj){
    console.log("200")
    ref.doc().set(newDataObj).catch((err) => {
      alert(err)
      console.error(err)
    })
  }
  

  return (
    <div className="comment-section">
      <div className="comment-input-container">
        <textarea
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
       <button onClick={() => {
        addComment({newComment, username})
        setNewComment('')
        }}>Post</button>

      </div>
      <div className="comment-list">
        {commentList.map((comment, index) => (
          <div className="comment" key={index}>
            <img
              className="comment-profile-pic"
              src={comment.profilePic}
              alt="Profile Pic"
            />
            <div className="comment-details">
              <div className="comment-username">{comment.username}</div>
              <div className="comment-text">{comment.comment}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
