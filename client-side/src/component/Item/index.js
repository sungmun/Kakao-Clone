import React from 'react';
import './app.scss';
export default ({ image, children }) => (
    <li className="Item">
        <img className="Image" src={image} alt="profilePhoto" />
        <div className="Content">{children}</div>
    </li>
);
