import React from 'react';
import Item from 'component/Item';
import './app.scss';

export default ({ image, nickName, intro }) => {
    console.log(image);
    console.log(nickName);
    console.log(intro);
    return (
        <Item image={image}>
            <div className="CenterBox">
                <div className="Nickname">{nickName}</div>
                <div>{intro}</div>
            </div>
        </Item>
    );
};
