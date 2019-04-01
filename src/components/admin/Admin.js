import React from 'react';
import './Admin.css';

import AppItem from './AppItem';

function Admin(props) {

    // const appItems = props.appItems;

    // get app list

    const listItems = appItems.map((appItem) =>
        <li key={appItem.url}><AppItem appItem={appItem} /></li>
    );

    return (
        <ul className="AppItems">{listItems}</ul>
    );
}

export default AppItems;