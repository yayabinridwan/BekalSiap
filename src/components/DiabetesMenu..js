import React, { Component } from "react";
import Slider from "react-slick";
import Menu from './Menu'

class CustomSlide extends Component {
  render() {
    return (
      <div {...this.props}>
              <Menu key={this.props.key} details={this.props.details} addOrder={this.props.addOrder} />
      </div>
    );
  }
}

export default class AutismeMenu extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div>
        <Slider {...settings} addOrder={this.props.addOrder}>
          {this.props.menu.map((key, index) => {
                                 const menu = key.penyakit.diabetes
                                 const list = Object.keys(key.penyakit.diabetes).map((key, index) => {
                                 return <CustomSlide key={key} details={menu[key]} addOrder={this.props.addOrder}/>
                               
                              })
                              return list
                              })}
        </Slider>
      </div>
    );
  }
}