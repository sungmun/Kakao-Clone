import React from 'react';
import { string, oneOfType, arrayOf, node } from 'prop-types';
import Layout from 'layout/Base';
import Navigation from 'component/Navigation/index';
import searchLogo from 'image/search_icon.png';

import './app.scss';

const List = ({ children, searchText }) => (
  <Layout>
    <Navigation />
    <div className="Search">
      <img className="SearchIco" src={searchLogo} alt="serach" />
      <input className="Input" placeholder={searchText} />
    </div>
    <div className="Contents">
      <ul className="List">{children}</ul>
    </div>
  </Layout>
);

List.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  searchText: string,
};

List.defaultProps = {
  searchText: '',
};

export default List;
