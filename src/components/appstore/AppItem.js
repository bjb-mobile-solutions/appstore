import React from 'react';
import './AppItem.css';

function AppItem(props) {
    const appItem = props.appItem;
    return (
        <div className="AppItem">
            {appItem.hub && <p>Hub: {appItem.hub}</p>}
            {appItem.comment && <p>"{appItem.comment}"</p>}
            <p>{appItem.os} {appItem.env &&
                <span> [{appItem.env}]</span>
            } </p>
            <a href={appItem.url} rel="noopener noreferrer">
                {appItem.name} ({appItem.version})
          </a>
        </div>
    );
}

export default AppItem;