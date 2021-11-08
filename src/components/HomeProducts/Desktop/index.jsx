import React from "react";

import Slick from "../../Slick/index";
import './index.scss';

export default function Desktop() {
  return (
    <div className="hidden lg:block container mx-auto px-16">
      <div class="grid-cols-2 gap-4 mb-10 flex">
        <div>
          <img
            className="home-banner-img rounded h-72"

            src="https://cdn.dsmcdn.com/marketing/datascience/automation/2021/11/8/FlasURuNlerWeb_202111080855.gif"
            alt="img"
          ></img>
        </div>

        <div className=" slick-slider-area">
          <Slick />
        </div>
      </div>

      <div class=" grid-cols-2 gap-4 mt-7 mb-10 flex">
        <div>
          <img
            className="home-banner-img rounded h-72"
            src="https://cdn.dsmcdn.com/marketing/datascience/automation/2021/11/8/Derimod_2087023_Web_202111081006.jpg"
            alt="img"
          ></img>
        </div>

        <div className="slick-slider-area">
          <Slick />
        </div>
      </div>
      <div class=" grid-cols-2 gap-4 mt-7 mb-10 flex">
        <div>
          <img
            className="home-banner-img rounded h-72"
            src="https://cdn.dsmcdn.com/marketing/datascience/automation/2021/11/8/AquadipolosaatGunesgozlugu_2090449_Web_202111081035.jpg"
            alt="img"
          ></img>
        </div>

        <div className="slick-slider-area">
          <Slick />
        </div>
      </div>
    </div>
  );
}
