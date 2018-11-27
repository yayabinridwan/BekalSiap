import React, { Component } from "react";
import Slider from "react-slick";
import Paket from './Paket'
import { connect } from 'react-redux';

class CustomSlide extends Component {
  render() {
    return (
      <div {...this.props}>
              <Paket key={this.props.key} paket={this.props.paket} />
      </div>
    );
  }
}

class DiabetesMenu extends Component {
  render() {
    const settings = {
      dots: false,
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
    const {paket} = this.props.data.data.subscribe
    return (
      <div>
        <Slider {...settings}>
        {Object.keys(paket).map((key, index) => {
                                   return <CustomSlide key={index} paket={paket[key]}/>
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

export default connect(mapStateToProps, null)(DiabetesMenu);