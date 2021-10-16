import "./style.scss";

const FavButton = () => {
  return (
    <a href="#top" className="account-nav-link fav-button">
      <div className="icon-container">
        <i className="i-heart initial-icon"></i>
        <i className="i-heart-orange hover-icon"></i>
      </div>
      <span>Favorilerim</span>
    </a>
  );
};

export default FavButton;