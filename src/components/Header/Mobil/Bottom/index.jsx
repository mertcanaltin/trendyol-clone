import React from "react";
import "./index.scss";
export default function index() {
  return (
    <div className='lg:hidden'>
      <div className="old-header headroom-wrapper" style={{ height: "50px" }}>
          <nav className="navigation__wrapper ">
            <ul className="navigation ">
              <li className="active">Kadın</li>
              <li className>Erkek</li>
              <li className>Ev &amp; Yaşam</li>
              <li className>Süpermarket</li>
              <li className>Çocuk</li>
              <li className>Kozmetik</li>
              <li className>Ayakkabı &amp; Çanta</li>
              <li className>Spor&amp;Outdoor</li>
              <li className>Elektronik</li>
              <li className>Saat &amp; Aksesuar</li>
              <li className>Trendyol Collection</li>
              <li className>Luxury &amp; Designer</li>
              <li className>Moda</li>
            </ul>
          </nav>
      </div>
    </div>
  );
}
