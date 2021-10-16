import "./style.scss";

const SearchBox = () => {
  return (
    <div className="searchbox">
      <input type="text" placeholder="Aradığınız ürün, kategori veya markayı yazınız"/>
      <i className="search-icon"></i>
    </div>
  );
};

export default SearchBox;