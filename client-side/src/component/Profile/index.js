import React from 'react';
import Item from 'component/Item';
import Info from 'component/Info';

export default ({ image, nickName, intro }) => {
    const images = [image];
    return (
        <Item image={images}>
            <Info nickName={nickName} email={intro} />
        </Item>
    );
};
