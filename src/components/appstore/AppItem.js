import React from 'react';
import './AppItem.css';

function AppItem(props) {
    const appItem = props.appItem;
    return (
        <div className="AppItem">
            <span>{appItem.os} {appItem.env &&
                 <span> [{appItem.env}]</span>
                 }: </span>
            <a href={appItem.url} rel="noopener noreferrer">
                {appItem.name} ({appItem.version})
          </a>
        </div>
    );
}

export default AppItem;