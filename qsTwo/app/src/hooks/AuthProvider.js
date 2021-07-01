import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./useAuth";

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    if (user) {
      history.push("/");
    } else {
      history.push("/login");
    }
  }, [user, history]);

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
  const value = { user, loginData, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
