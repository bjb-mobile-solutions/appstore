import React from 'react';
import { Link } from "react-router-dom";
import './Admin.css';
import * as ROUTES from '../../constants/routes';


import AddApp from './AddApp';

function Admin(props) {

    // const appItems = props.appItems;

    // get app list

    // const listItems = appItems.map((appItem) =>
    //     <li key={appItem.url}><AppItem appItem={appItem} /></li>
    // );

    return (
        <div>
            <AddApp authUser={props.authUser} />
            <Link to={ROUTES.LANDING}>Apps</Link>
        </div>
    );
}

export default Admin;