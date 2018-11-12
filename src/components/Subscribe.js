import React, { Component } from 'react'
import SimpleAppBar from './SimpleAppBar';
import Slider from './Slider'
import BerbagaiMenu from './BerbagaiMenu'
import SimpleBottomNavigation from './SimpleBottomNavigation'
import Berlangganan from './Berlangganan';

class Subscribe extends Component {
    render() {
        console.log('location', this.props.location.state)
        return(
            <div>
                <SimpleAppBar penyakit={this.props.match.params.penyakit}/>
                <div className="promo">
                   <Slider />
                </div>
                <BerbagaiMenu penyakit={this.props.match.params.penyakit}/>
                <div className="langganan">
                    <Berlangganan />
                </div>
                <SimpleBottomNavigation />
            </div>
        )
    }
}

export default Subscribe