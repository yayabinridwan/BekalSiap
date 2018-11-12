import React, { Component } from "react";
import Slider from "react-slick";
import Menu from './Menu'
import { connect } from 'react-redux';

class CustomSlide extends Component {
  render() {
    return (
      <div {...this.props}>
              <Menu key={this.props.key} details={this.props.details} />
      </div>
    );
  }
}

export class AutismeMenu extends Component {
  render() {
    const dataMenu = [...this.props.data]
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div className="ContohMenu">
        <h2>Rekomendasi Menu</h2>
        <Slider {...settings} addOrder={this.props.addOrder}>
          {dataMenu.map((key, index) => {
                                 const menu = key.data.penyakit.autisme
                                 const list = Object.keys(key.data.penyakit.autisme).map((key, index) => {
                                 return <CustomSlide key={key} details={menu[key]}/>
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

export default connect(mapStateToProps, null)(AutismeMenu);
