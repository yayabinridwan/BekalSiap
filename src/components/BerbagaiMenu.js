import React, { Component } from "react";
import Slider from "react-slick";
import Menu from './Menu'
import { connect } from 'react-redux';

class CustomSlide extends Component {
  render() {
    return (
      <div {...this.props}>
              <Menu key={this.props.key} details={this.props.details} addOrder={this.props.addOrder} />
      </div>
    );
  }
}

export class BerbagaiMenu extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    const dataMenu = [...this.props.data]
    return (
      <div>
        <h2>Contoh Menu</h2>
        <Slider {...settings} addOrder={this.props.addOrder}>
          {dataMenu.map((key, index) => {
                                 const data = key.data.penyakit[this.props.penyakit]
                                 console.log('data', data)
                                 const list = Object.keys(data).map((key, index) => {
                                 return <CustomSlide key={key} details={data[key]} addOrder={this.props.addOrder}/>
                              })
                              return list
                              })}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      data: state.data,
  };
};

export default connect(mapStateToProps, null)(BerbagaiMenu);
