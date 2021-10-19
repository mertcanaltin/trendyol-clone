import React from "react";

import Slick from "../Slick/index";

export default function HomeProducts() {
  return (
    <div className="container mx-auto px-16">
      <div class=" grid-cols-2 gap-4 mt-16 mb-10 flex">
        <div>
          <img
            className="rounded h-full"
            src="https://cdn.dsmcdn.com/marketing/datascience/automation/2021/10/16/Robotsupurgelerdebuyukekim_2072264_Web_202110162006.jpg"
            alt="img"
          ></img>
        </div>

        <div className="slick-slider-area">
          <Slick />
        </div>
      </div>

      <div class=" grid-cols-2 gap-4 mt-16 mb-10 flex">
        <div>
          <img
            className="rounded h-full"
            src="https://cdn.dsmcdn.com/ty203/campaign/banners/original/585647/892a121056_0_new.jpg"
            alt="img"
          ></img>
        </div>

        <div className="slick-slider-area">
          <Slick />
        </div>
      </div>
      <div class=" grid-cols-2 gap-4 mt-16 mb-10 flex">
        <div>
          <img
            className="rounded h-full"
            src="https://cdn.dsmcdn.com/marketing/datascience/automation/2021/10/16/Elektriklievaletlerindebuyukekimfirsatlari_2072262_Web_202110162008.jpg"
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
