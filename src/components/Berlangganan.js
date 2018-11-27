import React, { Component } from 'react'
import DiabetesMenu from './Diabetes'


class Berlangganan extends Component {
    render() {
        return (
            <div className="flex-box">
                <h2 className="col2">Paket Nutrition Coaching</h2>
                <div className="col2">
                    <DiabetesMenu />
                </div>
            </div>
        )
    }
}

export default Berlangganan