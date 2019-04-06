import React from 'react';
import Item from 'component/Item';
import friendJSON from 'component/TalkRoom/friend.json';

const attributeFilter = (frineds = [], attr) => frineds.map(val => val[attr]);

export default ({ friend = friendJSON }) => {
    return <Item image={attributeFilter(friend, 'photos')} />;
};
