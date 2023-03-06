import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import Card from './Cards';
import firebase from '../index';

function HomeScreen(props) {
  const { handleCardClick } = props;

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [filters, setFilters] = useState({
    trending: false,
    favorites: false,
    community: false,
    labor: false,
    tax: false,
    ordinance: false,
    motion: false,
  });

  const ref = firebase.firestore().collection("Bills");

  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const bills = [];
      querySnapshot.forEach((doc) => {
        bills.push(doc.data());
      });
      setData(bills);
      setLoader(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    console.log("handleFilterChange: ", name, checked);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
    console.log("Filters changed: ", filters);
  };

  
  const isVisible = (bill) => {
    const filterKeys = Object.keys(filters);
    for (let i = 0; i < filterKeys.length; i++) {
      const category = filterKeys[i];
      if (filters[category] && !bill[category]) {
        return false;
      }
    }
    return true;
  };
  

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <div className="homepageHeading">Trending Bills In King County</div>
      <div className="cardContainer">
        {loader === false && (data.map((bill) => (
          isVisible(bill) && (
            <Card
              key={bill.id}
              title={bill.title}
              onClick={() => handleCardClick(bill.title)}
              isVisible={isVisible(bill)}>
              <div className="graph"></div>
            </Card>
          )
        )))}
      </div>
    </div>
  );
}

export default HomeScreen;
