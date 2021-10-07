import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
let App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/productdetail/:id">
          <ProductDetail />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
