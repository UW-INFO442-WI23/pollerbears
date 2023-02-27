import React, { useEffect, useState } from 'react';
import HomeScreen from './components/Home';
import { NavBar, Footer } from './components/Nav';
import UniqueBill from './components/UniqueBill';
import firebase from './index'
import './index.css';

function App() {
  const [showUniqueBill, setShowUniqueBill] = useState(false);
  const [billTitle, setBillTitle] = useState('');
  const [billText, setBillText] = useState('');
  const [data, setdata] = useState([])
  const [loader, setloader] = useState(true)

  const ref = firebase.firestore().collection("Bills")

  function getData(){
    ref.onSnapshot(querySnapshot => {
      const bills = []
      querySnapshot.forEach((doc) => {
        bills.push(doc.data())
      })
      setdata(bills)
      setloader(false)
    })
  }

  useEffect(() => {
    getData()
    console.log(ref);
  },[])

  const handleCardClick = (title, text) => {
    setBillTitle(title);
    setBillText(text);
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
        <div>
          {loader === false && (data.map((Bills) => ( 
          <UniqueBill key={Bills.id} billTitle={Bills.title} billText={Bills.bill} handleBackClick={handleBackClick} />
          )))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;

/*
        {loader === false && (data.map((Bills) => ( 
         <div>
          <UniqueBill billTitle={Bills.id} handleBackClick={handleBackClick} />
         </div>
        )))}

*/