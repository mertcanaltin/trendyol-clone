import React, { Component } from "react";
import Slider from "react-slick";
import './index.scss';

export default class Fade extends Component {
  render() {
    const settings = {
      auto: true,
      dots: false,
      fade: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img
              src="https://cdn.dsmcdn.com/mrktng/crm/rightBnr/oct/18/imgs/moc.jpeg"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://cdn.dsmcdn.com/mrktng/crm/rightBnr/oct/16/imgs/kutahya.gif"
              alt="img"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
