import React from "react";
import './index.scss';
export default function TopBanner() {
  return (
    <div>
      <div
        className="head-custom-banner homePageTopBanner"
        data-banner-name="topbanner_supermart"
        align="center"
      >
        <a href="/butik/liste/101404/11--11--super--indirim--gunleri">
          <div
          className='bg-company'
          >
            <img
              src="https://cdn.dsmcdn.com/mrktng/crm/Inbox/nov/05/basladi.gif"
              draggable="false"
              width={1145}
              height={65}
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  );
}
