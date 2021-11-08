import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

export default function index() {
  return (
    <div className="lg:hidden header">
      <div className="header__left-icon-with-text-icon">
        <div className="icon-with-loader">
          <FontAwesomeIcon
            className=""
            style={{ fontSize: "27px", margin: "5px 0 0 1px", opacity: 1 }}
            icon={faBars}
          />
        </div>
      </div>
      <a className="header__link" href="/" title="Trendyol">
        <img
          className="header-trendyol-logo"
          src="https://cdn.dsmcdn.com/mweb/production/trendyol-logo.svg"
          alt="Trendyol Logo"
        />
      </a>
      <div className="header__icon-wrapper">
        <div className="header__icon">
          <a href="/giris" title="Hesabım">
            <div className="icon-container">
              <i
                className="i-user  font-icon icon-user"
                style={{ fontSize: "22px", opacity: 1 }}
              ></i>
            </div>
          </a>
        </div>
        <div className="header__icon">
          <a href="/giris/hesabim/favoriler" title="Favorilerim">
            <div className="icon-container">
              <i
                className="i-heart font-icon icon-heart"
                style={{ fontSize: "22px", opacity: 1 }}
              ></i>
            </div>
          </a>
        </div>
        <div className="header__icon">
          <a href="/sepetim" title="Sepetim">
            <div className="icon-container">
              <i
                className="i-bagg font-icon icon-shopping-cart"
                style={{ fontSize: "25px", opacity: 1 }}
              ></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
