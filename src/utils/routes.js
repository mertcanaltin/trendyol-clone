import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";

import Home from "../pages/Home";
import NotFound from "../pages/404";

const Routes = () => (
  <Router>
    <ScrollToTop />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
