import React from 'react';
import './AppStore.css';

import AppItems from './AppItems';

function AppStore(props) {

    const apps = appJSON.map((app) =>
        <li key={app.appName} className="AppStore"><img src={app.appIcon} alt={app.appName} /><p className="AppName">{app.appName}</p>
            {app.apps && <AppItems appItems={app.apps} />}
        </li>
    );

    function appList(authUser) {
        return <div>
            {authUser && <div>
                {/* <p>{authUser.email}</p> */}
                <ul className="AppList">{apps}</ul>
            </div>}
        </div>
    };

    return (
        <div>
            {props.authUser ? appList(props.authUser) : <p>Please login</p>}
        </div>
    );

}

export default AppStore;