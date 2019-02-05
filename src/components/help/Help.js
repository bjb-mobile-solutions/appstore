import React from 'react';
import { Link } from "react-router-dom";
import './Help.css';
import close from '../../fonts/close.svg';

function Help(props) {

    return (
        <div>
            <Link to="/"><img src={close} className="Close-button" alt="Close" /></Link>

            <div className="Help-content">
                <h2>Android</h2>
                <p>1. Open the ≪https://bjb-mobile-banking.github.io/appstore≫ URL in Chrome on the mobile phone / tablet</p>
                <p>2. Tap on the link of the app version you want to install</p>
                <p>3. Tap on 'Download' in the pop-up</p>
                <p>4. Tap on 'Open'</p>
                <p>5.a If you have a security warning, that apps can't be installed from unknown sources, click on 'Settings' on the pop-up</p>
                <p>5.b Allow apps to be installed form 'Unknown sources'</p>
                <p>5.c Go back</p>
                <p>6. Tap on 'Install'</p>
                <p>7. Tap on 'Open'</p>
                <h2>iOS</h2>
                <p>1. Open the ≪https://bjb-mobile-banking.github.io/appstore≫ URL in Chrome on the mobile phone / tablet</p>
                <p>2. Tap on the link of the app version you want to install</p>
                <p>3. Tap on 'Download' in the pop-up</p>
                <p>4. Tap on 'Open'</p>
                <p>5.a If you have a security warning, that apps can't be installed from unknown sources, click on 'Settings' on the pop-up</p>
                <p>5.b Allow apps to be installed form 'Unknown sources'</p>
                <p>5.c Go back</p>
                <p>6. Tap on 'Install'</p>
                <p>7. Tap on 'Open'</p>
            </div>
        </div>
    );

}

export default Help;