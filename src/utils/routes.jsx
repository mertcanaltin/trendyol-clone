import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";

import Home from "../pages/Home";
import NotFound from "../pages/404";
import ProductDetail from "../pages/Product-detail";

const Routes = () => (
  <Router>
    <ScrollToTop />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product-demo" component={ProductDetail} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;