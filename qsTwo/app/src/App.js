import "./App.css";
import Login from "./auth/Login/Login";
import { useState } from "react";
import Home from "./pages/Home/Home";

function App() {
  const [user, setUser] = useState("ridwan57@we");
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
  return (
    <div className="App">
      {user ? (
        <Home user={user} logout={logout} />
      ) : (
        <Login loginData={loginData} />
      )}
    </div>
  );
}

export default App;
