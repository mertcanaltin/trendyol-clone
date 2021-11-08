import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import './index.scss';
export default function Center() {
  return (
    <div className='lg:hidden'>
      <div className="search-autofill">
        <div className="search-autofill__input-container">
         
          <FontAwesomeIcon
            className="search-autofill__icon icon-search-long"
            style={{ fontSize: "27px", margin: "5px 0 0 1px", opacity: 1 }}
            icon={faSearch}
          />
          <span className="search-autofill__input">
            Kategori, ürün veya marka ara
          </span>
          <span />
        </div>
      </div>
    </div>
  );
}
