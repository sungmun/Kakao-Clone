import React from 'react';
import Item from 'component/Item';
import Info from 'component/Info';
import './app.scss';

export default ({ image, nickName, intro }) => (
    <Item image={image}>
        <Info nickName={nickName} email={intro} />
    </Item>
);
