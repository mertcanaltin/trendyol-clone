import React from "react";
import TopBanner from "./TopBanner";
import HeaderTop from "./Top";
import HeaderCenter from "./Center";
import HeaderBottom from "./Bottom";
import Mobil from './Mobil/Top';
import "./style.scss";

const Header = () => {
  return (
    <React.Fragment>
      <Mobil />
    <header className="hidden md:block header-main">
      <TopBanner/>
      <HeaderTop/>
      <HeaderCenter/>
      <HeaderBottom/>
    </header>
    </React.Fragment >
  );
};

export default Header;
