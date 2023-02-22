import React, { useState } from 'react';
import HomeScreen from './components/Home';
import { NavBar, Footer } from './components/Nav';
import UniqueBill from './components/UniqueBill';
import './index.css';

function App() {
  const [showUniqueBill, setShowUniqueBill] = useState(false);
  const [billTitle, setBillTitle] = useState('');

  const handleCardClick = (title) => {
    setBillTitle(title);
    setShowUniqueBill(true);
  };

  const handleBackClick = () => {
    setShowUniqueBill(false);
  };

  return (
    <div>
      <NavBar />
      {!showUniqueBill ? (
        <HomeScreen handleCardClick={handleCardClick} />
      ) : (
        <UniqueBill billTitle={billTitle} handleBackClick={handleBackClick} />
      )}
      <Footer />
    </div>
  );
}

export default App;
