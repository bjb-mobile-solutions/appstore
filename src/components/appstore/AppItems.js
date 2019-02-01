import React from 'react';
import './AppItems.css';

import AppItem from './AppItem';


function AppItems(props) {

    const appItems = props.appItems;
    const listItems = appItems.map((appItem) =>
        <li key={appItem.url}><AppItem appItem={appItem} /></li>
    );

    return (
        <ul className="AppItems">{listItems}</ul>
    );
}

export default AppItems;