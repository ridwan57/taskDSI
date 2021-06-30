import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (
  props
  // children, ...rest }
) => {
  console.log("props:", props);
  const auth = true;

  return auth ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
