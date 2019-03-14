import React from 'react';
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import * as ROUTES from '../../constants/routes';


import './Help.css';
import close from '../../fonts/close.svg';
import imageAndroid1 from '../../screenshots/android/1.png';
import imageAndroid2 from '../../screenshots/android/2.png';
import imageAndroid3 from '../../screenshots/android/3.png';
import imageAndroid4 from '../../screenshots/android/4.png';
import imageAndroid5 from '../../screenshots/android/5.png';
import imageAndroid6 from '../../screenshots/android/6.png';
import imageAndroid7 from '../../screenshots/android/7.png';
import imageAndroid8 from '../../screenshots/android/8.png';
import imageAndroid9 from '../../screenshots/android/9.png';

import imageiOS1 from '../../screenshots/ios/1.PNG';
import imageiOS2 from '../../screenshots/ios/2.PNG';
import imageiOS3 from '../../screenshots/ios/3.PNG';
import imageiOS4 from '../../screenshots/ios/4.PNG';

function Help(props) {

    return (
        <div>
            <Link to={ROUTES.LANDING}><img src={close} className="Close-button" alt="Close" /></Link>
            <p>
                <AnchorLink offset='80' href='#android'>Android</AnchorLink>
            </p>
            <p>
                <AnchorLink offset='80' href='#ios'>iOS</AnchorLink>
            </p>

            <div className="Help-content">
                <h2 id="android">Android</h2>
                <p>1. Open the ≪https://bjb-mobile-banking.github.io/appstore≫ URL in Chrome on the mobile phone / tablet</p>
                <p>2. Tap on the link of the app version you want to install</p>
                <img src={imageAndroid1} alt="screen shot" />
                <p>3. Tap on 'Download' in the pop-up</p>
                <img src={imageAndroid2} alt="screen shot" />
                <p>4. Tap on 'Open'</p>
                <img src={imageAndroid3} alt="screen shot" />
                <p>5.a If you have a security warning, that apps can't be installed from unknown sources, click on 'Settings' on the pop-up</p>
                <img src={imageAndroid4} alt="screen shot" />
                <p>5.b Allow apps to be installed form 'Unknown sources'</p>
                <img src={imageAndroid5} alt="screen shot" />
                <p></p>
                <img src={imageAndroid6} alt="screen shot" />
                <p>6. Tap on 'Install'</p>
                <img src={imageAndroid7} alt="screen shot" />
                <p>7. Wait until install finishes..</p>
                <img src={imageAndroid8} alt="screen shot" />
                <p>8. Tap on 'Open'</p>
                <img src={imageAndroid9} alt="screen shot" />
                <h2 id="ios">iOS</h2>
                <p>1. Open the ≪https://bjb-mobile-banking.github.io/appstore≫ URL in Safari on the mobile phone / tablet</p>
                <p>2. Tap on the link of the app version you want to install</p>
                <img src={imageiOS1} alt="screen shot" />
                <p>3. Tap on 'Install' in the pop-up</p>
                <img src={imageiOS2} alt="screen shot" />
                <p>4. Wait until loading finishes..</p>
                <img src={imageiOS3} alt="screen shot" />
                <p>5. Tap on app icon to open app</p>
                <img src={imageiOS4} alt="screen shot" />
            </div>
        </div>
    );

}

export default Help;