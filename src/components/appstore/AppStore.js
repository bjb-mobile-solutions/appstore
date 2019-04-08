import React, { Component } from 'react';
import './AppStore.css';

import AppItems from './AppItems';

// import appJSON from '../../apps/apps.json';


const INITIAL_STATE = {
    apps: null,
};


class AppStore extends Component {

    constructor(props) {
        super(props);

        // const apps = appJSON.map((app) =>
        //     <li key={app.appName} className="AppStore"><img src={app.appIcon} alt={app.appName} /><p className="AppName">{app.appName}</p>
        //         {app.apps && <AppItems appItems={app.apps} />}
        //     </li>
        // );

        this.state = { ...INITIAL_STATE };

        props.firebase.apps().get().then((snapshot) => {

            var apps = [];
            snapshot.forEach(function (doc) {
                apps.push(doc.data());
            });
            this.setState({apps});

        })

    }

    appList(authUser) {
        return <div>
            {authUser && <div>
                <ul className="AppList">{this.state.apps && this.state.apps.map((app) => {

                    console.log(app.apps);

                    return <li key={app.appId} className="AppStore"><img src={app.appIcon} alt={app.name} /><p className="AppName">{app.appName}</p>
                        {app.apps && <AppItems appItems={app.apps} />}
                    </li>
                }
                )}</ul>
            </div>}
        </div>
    };

    render() {
        return <div>
            {this.props.authUser ? this.appList(this.props.authUser) : <p>Please login</p>}
        </div>
    };

}

export default AppStore;