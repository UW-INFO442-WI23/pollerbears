import React from 'react'
import Card from './Cards';

function Home() {
  return (
    <div>
        <div className="homepageHeading">Trending Bills In King County</div>
        <div className="cardContainer">
          <Card title="Bill Title 1" />
          <Card title="Bill Title 2" />
          <Card title="Bill Title 3" />
        </div>
    </div>

  );
}

export default Home;
