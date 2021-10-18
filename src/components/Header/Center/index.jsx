import {Col, Container, Row} from "react-grid-system";
import {Link} from "react-router-dom";
import SearchBox from "./SearchBox";
import Auth from "./Auth";
import FavButton from "./FavButton";
import ShoppingCart from "./ShoppingCart";

import "./style.scss";

const HeaderCenter = () => {
  return (
    <div className="header-center">
      <Container>
        <Row>
          <Col xs={2} className="header-col">
            <div className="logo">
              <Link to="/">
                <img src="https://cdn.dsmcdn.com/web/logo/ty-logo.svg" alt="Trendyol Logo" width="110px"/>
              </Link>
            </div>
          </Col>
          <Col xs={6} className="header-col">
            <SearchBox/>
          </Col>
          <Col xs={4} className="header-col">
            <div className="account-nav">
              <div className="account-nav-item dropdown">
                <Auth/>
              </div>
              <div className="account-nav-item">
                <FavButton/>
              </div>
              <div className="account-nav-item dropdown">
                <ShoppingCart/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderCenter;