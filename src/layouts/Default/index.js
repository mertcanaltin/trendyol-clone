import "./style.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeProducts from "../../components/HomeProducts";

const DefaultLayout = (s) => {
  return (
    <div className="app">
      <div className="container mx-auto">
        <Header />
        
        
        <HomeProducts/>

        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
