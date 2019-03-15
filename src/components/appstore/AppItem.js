import React from 'react';
import './AppItem.css';

function AppItem(props) {
    const appItem = props.appItem;
    return (
        <div className="AppItem">
            <p>{appItem.name} {appItem.version}</p>
            <p>Platform: {appItem.os}</p>
            {appItem.env && <p>Environment: <span class={appItem.env}>{appItem.env}</span></p>}
            {appItem.comment && <p>≪{appItem.comment}≫</p>}
            <a href={appItem.url} rel="noopener noreferrer">
                {appItem.os === "iOS" && "Install"}
                {appItem.os === "Android" && "Download"}
          </a>
            <p></p>
        </div>
    );
}

export default AppItem;