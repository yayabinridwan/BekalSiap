import React, { Component} from 'react';
import { connect } from 'react-redux';
import { JSONData } from '../js/actions/index';
import ButtonAppBar from './ButtonAppBar'
import SimpleSlider from './Slider'
import NestedGrid from './NestedGrid'
import WhyUs from './WhyUs'
import TentangKami from './TentangKami'
import Footer from './Footer'
import AutismeMenu from './AutismeMenu'
import Berlangganan from './Berlangganan'
import SimpleBottomNavigation from './SimpleBottomNavigation'


class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('sucess');
    }

    render() {
        return (
            <div>
                <ButtonAppBar />
                <div id="promo">
                     <SimpleSlider />
                </div>
                <NestedGrid />
                <AutismeMenu />
                <WhyUs />
                <Berlangganan />
                <TentangKami />
                <Footer />
                <SimpleBottomNavigation />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (data) => dispatch(JSONData(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);


/*
  <OrderPage />
  
import React from 'react'
import Inventory from './Inventory';
import Order from './Order';
import listMenu from '../data/sample-fishes'
import base from '../js/firebase'
import ButtonAppBar from './ButtonAppBar'
import SimpleSlider from './Slider'
import { connect } from "react-redux";
import NestedGrid from './NestedGrid'
import AutismeMenu from './AutismeMenu'
import DiabetesMenu from './Diabetes'
import SimpleBottomNavigation from './SimpleBottomNavigation'
import WhyUs from './WhyUs'
import Berlangganan from './Berlangganan'
import TentangKami from './TentangKami'
import Footer from './Footer'
import { fetchProducts } from '../js/actions/index'

class App extends React.Component{
    componentDidMount() {
        this.props.dispatch(fetchProducts());
     }

    addFish = fish => {
        console.log('Adding fish')
        const fishes = {...this.state.fish}
        fishes[`fish-${Date.now()}`] = fish
        this.setState({fishes})
    }

    addOrder = key => {
        console.log('autisme', key)
        this.setState({order: [...this.state.order, key]})
    }


    render() {
        const { error, loading, products } = this.props;
        console.log('products',products)

        if (error) {
            return <div>Error! {error.message}</div>;
        }
      
        if (loading) {
            return <div>Loading...</div>;
        }

        return(
            <div>
                <p>hello</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
    loading: state.products,
    error: state.products
  });
  
export default connect(null, mapStateToProps)(App);
  */
/* 
<ButtonAppBar />
                <SimpleSlider />
                <NestedGrid state={this.state.fishes} addOrder={this.addOrder}/>
                <AutismeMenu menu={this.state.fishes} addOrder={this.addOrder}/>
                <WhyUs />
                <Berlangganan paket={this.state.fishes} addOrder={this.addOrder}/>
                <TentangKami />
                <Footer />
                <Order
                    order={this.state.order}
                />

*/