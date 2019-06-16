import React from 'react';
import searchLogo from 'image/search_icon.png';

import './app.scss';

const SearchBar = () => (
  <div className="Search">
    <img className="SearchIco" src={searchLogo} alt="serach" />
    <input className="Input" />
  </div>
);

export default SearchBar;
