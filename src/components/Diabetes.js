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

export class DiabetesMenu extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    const berlangganan = [...this.props.data]
    return (
      <div>
        <Slider {...settings}>
        {berlangganan.map((key, index) => {
                                 const paket = key.data.subscribe.paket
                                 console.log('paket', key.data.subscribe.paket)
                                 const paketan = Object.keys(paket).map((key, index) => {
                                   return <CustomSlide key={index} paket={paket[key]}/>
                                 })
                                 return paketan
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