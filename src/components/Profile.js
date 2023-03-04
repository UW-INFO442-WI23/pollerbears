import React from 'react';

function Profile({ user, setIsProfileOpen }) {
  const { displayName, email, photoURL } = user;
  const handleProfileClose = () => {
    setIsProfileOpen(false);
  };

  return (
    <div className="profile-modal-wrapper">
      <div className="profile-modal">
        <div className="profile-modal-header">
          <h2>Profile Information</h2>
          <button onClick={handleProfileClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="profile-modal-content">
          <div className="profile-pic-wrapper">
            <img
              className="profile-pic"
              src={photoURL || "../img/default_profile_pic.png"}
              alt="User profile"
            />
          </div>
          <div className="profile-info">
            <p>Name: {displayName}</p>
            <p>Email: {email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
