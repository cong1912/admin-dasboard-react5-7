import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Users from "./Pages/Users";
import RedirectToUsers from "./components/RedirectToUsers";
import Links from "./components/Links";
import Product from "./Pages/products/Product";
import ProductForm from "./Pages/products/ProductForm";
import Orders from "./Pages/Orders";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <RedirectToUsers />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            {/* product */}
            <Route path={`/products/:id/edit`}>
              <ProductForm />
            </Route>
            <Route exact path="/products/create">
              <ProductForm />
            </Route>
            <Route exact path="/products">
              <Product />
            </Route>
            {/* user */}
            <Route path={`/users/:id/links`}>
              <Links />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
