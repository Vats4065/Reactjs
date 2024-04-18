import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Service from "./Components/Service";
import User from "./Components/User";
import GoBack from "./Components/GoBack";
import Search from "./Components/Search";

function App() {
  function name() {
    return <h1>Hello from name page</h1>;
  }
  return (
    <>
      <Menu></Menu>
      <div className="container mx-auto ">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route
            exact
            path={["/user", "/user/:fname/", "/user/:fname/:lname"]}
            component={User}
          />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/about" component={About} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/contact/name" component={name} />
          {/* <Route component={Error}></Route> */}
          <Redirect to="/" />
        </Switch>
        <div className="mt-5">
          <GoBack />
        </div>
      </div>
    </>
  );
}

export default App;
