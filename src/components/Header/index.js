import HeaderTop from "./Top";
import HeaderCenter from "./Center";
import HeaderBottom from "./Bottom";

import "./style.scss";

const Header = () => {
  return (
    <header className="header-main">
      <HeaderTop/>
      <HeaderCenter/>
      <HeaderBottom/>
    </header>
  );
};

export default Header;
