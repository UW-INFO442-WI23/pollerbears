import React, { useState } from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from './Cards';

function Filter(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCheckboxes, setShowCheckboxes] = useState(true);
  const [showBillTypeDropdown, setShowBillTypeDropdown] = useState(false);

  const toggleCheckboxes = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  const toggleBillTypeDropdown = () => {
    setShowBillTypeDropdown(!showBillTypeDropdown);
  };

  return (
    <div className="filter-container">
        <FontAwesomeIcon icon={faFilter} className="icon icon-filter" />
        <div className='filter-heading'>
            Filter
        </div>
      
        <div className="checkbox-container">
            <label>
            <input type="checkbox"/>
            Trending
          </label>
          <label>
            <input type="checkbox"/>
            Favorites
          </label>
          <label>
            <input type="checkbox"/>
            Community
          </label>
          <label onClick={toggleBillTypeDropdown}>
            Bill Type
            <span className="arrow-icon">{showBillTypeDropdown ? '▲' : '▼'}</span>
          </label>
          {showBillTypeDropdown && (
            <div className="bill-type-dropdown">
              <label>
                <input type="checkbox"/>
                Labor
              </label>
              <label>
                <input type="checkbox"/>
                Tax
              </label>
              <label>
                <input type="checkbox"/>
                Ordinance
              </label>
              <label>
                <input type="checkbox"/>
                Motion
              </label>
            </div>
          )}

        </div>
    </div>
  );
}

export default Filter;
