import "./App.css";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";
import Product from "./components/Product";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Menu></Menu>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product" component={Product} />
          </Switch>
          {/* <Product /> */}
        </div>
      </Provider>
    </>
  );
}

export default App;
