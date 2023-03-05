import React from 'react';

function Profile({ userData, setIsProfileOpen }) {
  console.log('User:', userData);
  if (!userData) {
    console.log('User not found.');
    return null;
  }

  const { name, email, photoURL } = userData;
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Photo URL:', photoURL);

  return (
    <div>
      <h1>{name}'s Profile</h1>
      <p>Email: {email}</p>
      <img src={photoURL} alt="Profile" />
    </div>
  );
}

export default Profile;
