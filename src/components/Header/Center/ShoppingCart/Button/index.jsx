import "./style.scss";

const ShoppingCartButton = () => {
  return (
    <a href="#top" className="account-nav-link shopping-cart-button">
      <div className="icon-container">
        <i className="i-bagg initial-icon"></i>
        <i className="i-bagg-orange hover-icon"></i>
      </div>
      <span>Sepetim</span>
      <span className="shopping-cart-item-count">1</span>
    </a>
  );
};

export default ShoppingCartButton;