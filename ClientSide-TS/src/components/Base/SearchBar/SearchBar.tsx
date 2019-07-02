import search_iconPng from 'image/search_icon.png';
import * as React from 'react';
import './app.css';

const searchBar: React.SFC = () => (
  <div className="Search">
    <img className="SearchIco" src={search_iconPng} alt="serach" />
    <input className="Input" />
  </div>
);

export { searchBar as SearchBar };
