import React from 'react';
import Item from 'component/Item';
import friendJSON from 'component/TalkRoom/friend.json';

const attributeFilter = (frineds = [], attr) => frineds.map(val => val[attr]);

const nameView = (names = []) => {
    const nameStr = names.join(', ');

    if (nameStr.length > 40) {
        return nameStr.slice(0, 39) + '...';
    }

    return nameStr;
};

export default ({ friend = friendJSON }) => {
    return <Item image={attributeFilter(friend, 'photos')} />;
};
