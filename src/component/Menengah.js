import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menengah extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>SMA (Sekolah Menengah Atas)</li>
                    <li>MA (Madrasah Aliyah)</li>
                    <li>SMA (Sekolah Menengah Kejuruan)</li><li>MTs (Madrasah Tsanawiyah)</li>                      
                </ul>
            </div>
        );
    }
}
export default Menengah;