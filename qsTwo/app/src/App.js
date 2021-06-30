import "./App.css";
import Login from "./pages/login/Login";
import React from "react";
import Home from "./pages/home/Home";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./component/route/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
