import React from "react";
import { Router, Switch, Route, HashRouter } from "react-router-dom";

import IndexPage from "./pages/Index.js";
import LoginPage from "./pages/Login.js";
import RegisterPage from "./components/sign-up/Signup.js";
import history from "./utils/history.js";

export default function App() {
  return (
    <Router history={history}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={IndexPage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
        </Switch>
      </HashRouter>
    </Router>
  );
}
