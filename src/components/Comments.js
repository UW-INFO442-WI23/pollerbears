import React, { useState } from 'react';

const Comments = () => {
  const [commentList, setCommentList] = useState([
    { username: 'John', profilePic: 'https://via.placeholder.com/50x50', comment: 'Absolutely in support of this bill!' },
    { username: 'Jane', profilePic: 'https://via.placeholder.com/50x50', comment: 'I\'m kind of hesitant about this one, but I\'ll have to do more research.' },
    { username: 'Alex', profilePic: 'https://via.placeholder.com/50x50', comment: 'Voting yes immediately.' },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentList = [...commentList];
      newCommentList.push({
        username: 'New User',
        profilePic: 'https://via.placeholder.com/50x50',
        comment: newComment,
      });
      setCommentList(newCommentList);
      setNewComment('');
    }
  };

  return (
    <div className="comment-section">
      <div className="comment-input-container">
        <textarea
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Post</button>
      </div>
      <div className="comment-list">
        {commentList.map((comment, index) => (
          <div className="comment" key={index}>
            <img className="comment-profile-pic" src={comment.profilePic} alt="Profile Pic" />
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
