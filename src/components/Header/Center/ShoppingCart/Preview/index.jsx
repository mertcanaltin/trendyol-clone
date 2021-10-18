import "./style.scss";
import Button from "../../../../Button";
import {Link} from "react-router-dom";

const ShoppingCartPreview = () => {
  return (
    <div className="shopping-cart-preview dropdown-menu">
      <div className="shopping-cart-title">Sepetim (1 Ürün)</div>
      <ul className="shopping-cart-items">
        <li className="shopping-cart-item">
          <a className="shopping-cart-item-wrapper" href="#top">
            <div className="shopping-cart-item-image">
              <img src="https://cdn.dsmcdn.com/ty68/product/media/images/20210211/6/61991577/58041185/1/1_org_zoom.jpg"
                   alt="" width={55}/>
            </div>
            <div className="shopping-cart-item-content">
              <div className="shopping-cart-item-title">Deneme Test Ürünü Deneme Test Ürünü Deneme Test Ürünü</div>
              <div className="shopping-cart-item-details">Beden: Tek Ebat Adet: 1</div>
              <div className="shopping-cart-item-price">64,90 TL</div>
            </div>
          </a>
        </li>
      </ul>
      <div className="shopping-cart-footer">
        <Button variant="secondary" width="48%" height="34px" size="sm" fontSize="15px" as={Link} to="/">
          Sepete Git
        </Button>
        <Button size="sm" width="48%" height="34px" fontSize="15px" as={Link} to="/">
          Siparişi Tamamla
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCartPreview;