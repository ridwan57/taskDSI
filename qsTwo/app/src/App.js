import "./App.css";
import Login from "./auth/Login/Login";
import { useState } from "react";
import Home from "./pages/Home/Home";

function App() {
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
  return (
    <div className="App">
      {user ? (
        <Home user={user} logout={logout} />
      ) : (
        <Login loginData={loginData} />
      )}
      <br />
      <p>email: ridwan@gmail.com password: 123 </p>
    </div>
  );
}

export default App;
