import React, { Component } from "react";
import Slider from "react-slick";
import Menu from './Menu'
import { connect } from 'react-redux';

class CustomSlide extends Component {
  render() {
    return (
      <div {...this.props}>
              <Menu key={this.props.key} details={this.props.details}/>
      </div>
    );
  }
}

export class BerbagaiMenu extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const menu = this.props.data.data.penyakit[this.props.penyakit]
    console.log('menu2', menu)
    return (
      <div className="ContohMenu">
        <h2>Contoh Menu</h2>
        <Slider {...settings} addOrder={this.props.addOrder}>
          {
             Object.keys(menu).map((key, index) => {
              return <CustomSlide key={key} details={menu[key]} />
           })
          }
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
