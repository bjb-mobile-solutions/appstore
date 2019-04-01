import React from 'react';
import './Admin.css';

import AddApp from './AddApp';

function Admin(props) {

    // const appItems = props.appItems;

    // get app list

    // const listItems = appItems.map((appItem) =>
    //     <li key={appItem.url}><AppItem appItem={appItem} /></li>
    // );

    return (
        <AddApp authUser={props.authUser} />
    );
}

export default Admin;