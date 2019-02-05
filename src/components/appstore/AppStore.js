import React from 'react';
import './AppStore.css';

import AppItems from './AppItems';

import appJSON from '../../apps/apps.json';

function AppStore(props) {

    const apps = appJSON.map((app) =>
        <li key={app.appName} className="AppStore"><img src={app.appIcon} /><p className="AppName">{app.appName}</p>
            {app.apps && <AppItems appItems={app.apps} />}
        </li>
    );

    return (
        <ul className="AppList">{apps}</ul>
    );

}

export default AppStore;