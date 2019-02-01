import React, { Component } from 'react';
import './OSStatistics.css';
import PieChart from 'react-minimal-pie-chart';

export default class OSStatistics extends Component {


    render() {
        const AndroidColors = [
            '#006400ff',
            '#006400dd',
            '#006400bb',
            '#00640099',
            '#00640077',
            '#00640055',
            '#00640033',
        ];

        const iOSColors = [
            '#f39c12ff',
            '#f39c12dd',
            '#f39c12bb',
            '#f39c1299',
            '#f39c1277',
            '#f39c1255',
            '#f39c1233',
        ];


        const os = this.props.os
        const data = []

        var iOSCounter = 0
        var AndroidCounter = 0
        Object.keys(os).map(key => Object.keys(os[key]).map((k) => {
            const value = os[key][k]
            data.push({ value: value, color: key === 'Android' ? AndroidColors[AndroidCounter++] : iOSColors[iOSCounter++] })
        }))

        iOSCounter = 0
        AndroidCounter = 0
        return (
            <div className='OSStatistics'>
                <div className='PieChart'>
                    <PieChart
                        data={data}
                    />
                </div>
                <div>
                    <table className='Table'>
                        <tbody>
                            {
                                Object.keys(os).map(key => Object.keys(os[key]).map(k => <tr style={{ backgroundColor: key === 'Android' ? AndroidColors[AndroidCounter++] : iOSColors[iOSCounter++], color: 'white' }} key={key + k}>
                                    <td>{key} {k}</td>
                                    <td>{os[key][k]}</td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}