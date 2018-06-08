import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dasar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>SD (Sekolah Dasar)</li>
                    <li>MI (Madrasah Ibtidaiyah)</li>
                    <li>SMP (Sekolah Menengah Pertama)</li>
                    <li>MTs (Madrasah Tsanawiyah)</li>                      
                </ul>
            </div>
        );
    }
}
export default Dasar;