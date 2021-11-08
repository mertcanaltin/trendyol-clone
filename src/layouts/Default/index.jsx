import "./style.scss";

import Header from "../../components/Header";
import Story from "../../components/Story";
import Footer from "../../components/Footer";
import HomeProducts from "../../components/HomeProducts";

const DefaultLayout = (s) => {
  return (
    <div className="app">
      <div className="lg:mx-auto">
        <Header />
        <Story/>
        <HomeProducts />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
