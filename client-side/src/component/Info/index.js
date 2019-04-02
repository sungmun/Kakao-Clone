import React from 'react';
import './App.scss';

export default ({ nickName, email }) => (
    <div className="Info">
        <div className="Nickname">{nickName}</div>

        <div className="Email">{email}</div>
    </div>
);
