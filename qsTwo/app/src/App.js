import "./App.css";
import Login from "./auth/Login/Login";
import React, { useState } from "react";
import Home from "./pages/Home/Home";
import { useHistory, Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  const history = useHistory();
  // const [user, setUser] = useState("ridwan57@we");
  const [user, setUser] = useState(null);
  const logout = () => {
    setUser(null);
  };
  const loginData = (data) => {
    if (data) {
      setUser(data);
    } else {
      setUser(null);
    }
  };
  React.useEffect(() => {
    console.log("here");
    if (user) {
      history.push("/");
    } else {
      history.push("/login");
    }
  }, [user, history]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <Login loginData={loginData} />
        </Route>
        <PrivateRoute path="/">
          <Home exact user={user} logout={logout} />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
