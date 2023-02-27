import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import Card from './Cards';
import firebase from '../index'

function HomeScreen(props) {
  const { handleCardClick } = props;

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
  },[])

  return (
    <div>
      <Filter />
      <div className="homepageHeading">Trending Bills In King County</div>
      <div className="cardContainer">
      {loader === false && (data.map((Bills) => ( 
        <Card title={Bills.title} onClick={() => handleCardClick(Bills.title)}>
          <div className="graph"></div>
        </Card>
        )))}
      </div>
    
    </div>
  );
}

export default HomeScreen;
