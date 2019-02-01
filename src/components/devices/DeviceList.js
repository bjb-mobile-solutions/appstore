import React, { Component } from 'react';
import './DeviceList.css';
import firebase from '../../javascripts/firebase';
import OSStatistics from './OSStatistics';

export default class DeviceList extends Component {
    constructor(props) {
        super(props)
        this.ref = firebase.firestore().collection('devices')
        this.unsubscribe = null
        this.state = {
            devices: [],
            os: {}
            // os: { 'Android': { '9': 2, '7.0': 1 }, 'iOS': { '12.0': 1 } }
        }
    }

    onCollectionUpdate = (querySnapshot) => {
        const devices = []
        const os = {}
        querySnapshot.forEach((doc) => {
            const { model, modelName, osName, osVersion } = doc.data()

            // devices
            devices.push({
                key: doc.id,
                doc, // DocumentSnapshot
                model,
                modelName,
                osName,
                osVersion,
            })

            // OS
            if (os[osName] === undefined) {
                os[osName] = { [osVersion]: 1 }
            } else if (os[osName][osVersion] === undefined) {
                os[osName][osVersion] = 1
            } else {
                os[osName][osVersion] += 1
            }
        })
        this.setState({
            devices,
            os
        })
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    render() {
        return (
            <div className='DeviceList'>
                <h2>Test Lab device List</h2>

                <OSStatistics os={this.state.os} />
                <ul>
                    {this.state.devices.map(device =>
                        <li key={device.key} className='DeviceItem'>
                            <div className='PlatformIcon'>
                                {device.osName === 'Android' && <img src="https://img.icons8.com/color/48/000000/android-os.png" />}
                                {device.osName === 'iOS' && <img src="https://img.icons8.com/ios/48/000000/mac-os-filled.png" />}
                            </div>
                            <div className='DeviceInfo'>
                                <span>{device.modelName}</span>
                                <p>{device.osName} {device.osVersion}</p>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}