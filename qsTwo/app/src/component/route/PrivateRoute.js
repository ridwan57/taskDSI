import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return user ? <Route {...rest} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
