import * as React from "react";
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-input">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b889c61f38ba226f100bc50bf64d6cc35c5d8f8049c6b489edc99345d19b441e?"
          className="search-icon"
          alt="Search Icon"
        />
        <input type="text" placeholder="Search for an Activity" />
      </div>
      <button className="search-button">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c79778c4c764cdd66754c3473fc37a4b64844240af6106123cf464369b1098c?"
          className="button-icon"
          alt="Search Button"
        />
      </button>
    </div>
  );
}

export default SearchBar;
