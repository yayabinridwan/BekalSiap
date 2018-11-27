import React, { Component } from 'react'
import {connect } from 'react-redux'
import RestaurantMenu from './RestaurantMenu'
import ButtonAppBar from './ButtonAppBar';
import SimpleBottomNavigation from './SimpleBottomNavigation';

class RestaurantPage extends Component {
    render() {
        return(
            <div>
                <ButtonAppBar/>
                <div className="RestoPage">
                    <h4 class="font-weight-bold">{this.props.menu.restaurant.name}</h4>
                    <h6>{this.props.menu.restaurant.type}</h6>
                    <h7>{this.props.menu.restaurant.alamat}</h7>
                    <RestaurantMenu details={this.props.menu.restaurant}/>
                </div>
                <SimpleBottomNavigation />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.data
    };
};

export default connect(mapStateToProps, null)(RestaurantPage)