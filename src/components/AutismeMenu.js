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
    const {diet} = this.props.data.data.penyakit
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
        <div className="text">
           <h2 >Pilihan Diet</h2>
        </div>
        <Slider {...settings} addOrder={this.props.addOrder}>
          {
            Object.keys(diet).map((key, index) => {
              return <CustomSlide key={key} details={diet[key]}/>
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

export default connect(mapStateToProps, null)(AutismeMenu);
