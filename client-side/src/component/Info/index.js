import React from 'react';
import { Info, Nickname, Email } from './App.scss';

export default ({ nickName, email }) => (
    <div className={Info}>
        <span className={Nickname}>{nickName}</span>

        <p className={Email}>{email}</p>
    </div>
);
