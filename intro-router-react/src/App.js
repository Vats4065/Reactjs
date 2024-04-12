import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Menu from "./Components/Menu";

function App() {
  function name() {
    return <h1>Hello from name page</h1>;
  }
  return (
    <>
      <Menu></Menu>
      <Switch>
        <Route exact path={["/", "/about"]} component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contact/name" component={name} />
        <Route component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
