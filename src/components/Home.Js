import React from 'react';
import Filter from './Filter';
import Card from './Cards';

function HomeScreen(props) {
  const { handleCardClick } = props;

  return (
    <div>
      <Filter />
      <div className="homepageHeading">Trending Bills In King County</div>
      <div className="cardContainer">
        <Card title="Bill Title 1" onClick={() => handleCardClick('Bill Title 1')}>
          <div className="graph"></div>
        </Card>
        <Card title="Bill Title 2" onClick={() => handleCardClick('Bill Title 2')} />
        <Card title="Bill Title 3" onClick={() => handleCardClick('Bill Title 3')} />
        
      </div>
    </div>
  );
}

export default HomeScreen;
