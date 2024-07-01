import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="group">
      <div className="SearchBar">
        <input type="text" placeholder="Search for an Activity" />
        <button type="submit" className="button">
          <i className="fa fa-search icon"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
