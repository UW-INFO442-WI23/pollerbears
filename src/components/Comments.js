import React, { useState } from 'react';

const Comments = () => {
  const [commentList, setCommentList] = useState([
    { username: 'John', profilePic: 'https://via.placeholder.com/50x50', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { username: 'Jane', profilePic: 'https://via.placeholder.com/50x50', comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.' },
    { username: 'Alex', profilePic: 'https://via.placeholder.com/50x50', comment: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam.' },
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
      <h2>Comments</h2>
      <div className="comment-input-container">
        <img className="comment-profile-pic" src="https://via.placeholder.com/50x50" alt="Profile Pic" />
        <textarea
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Add Comment</button>
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
