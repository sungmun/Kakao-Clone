import React from 'react';
import Layout from 'layout/Base';
import Navigation from 'component/Navigation';
import './app.scss';
import searchLogo from 'image/search_icon.png';
export default ({ children, searchText }) => (
    <Layout>
        <Navigation />
        <div className="Search">
            <img className="SearchIco" src={searchLogo} alt="serach" />
            <input className="Input" placeholder={searchText} />
        </div>
        <div className="Contents">{children}</div>
    </Layout>
);
