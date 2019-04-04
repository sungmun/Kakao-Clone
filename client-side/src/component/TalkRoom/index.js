import React from 'react';
import Item from 'component/Item';

const attributeFilter = (frineds = [], attr) => frineds.map(val => val[attr]);

export default ({ friend = [] }) => {
    return <Item image={attributeFilter(friend, 'photos')} />;
};
