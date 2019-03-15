import React from 'react';
import './AppItem.css';

import imageiOS from '../../images/ios.png';
import imageAndroid from '../../images/android.png';


function AppItem(props) {
    const appItem = props.appItem;
    return (
        <div className="AppItem">
            <p>{appItem.name} {appItem.version}</p>
            {/* {appItem.os} */}
            {appItem.os === "iOS" && <p>iOS <img src={imageiOS} alt="iOS" /></p>}
            {appItem.os === "Android" && <p>Android <img src={imageAndroid} alt="Android" /></p>}

            <p>
             {appItem.env && <span class={appItem.env}>{appItem.env}</span>}</p>
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