import React, { useState } from "react";
import LoginForm from "../../component/form/LoginForm";
import { useAuth } from "../../hooks/useAuth";
import styles from "./Login.module.css";
function validateEmail(email) {
  const re = /^([A-Z\d\.-]+)@(([a-z\d-])+)\.([a-z]{2,8})((\.[a-z]{2,8})?)*$/gi;
  return re.test(String(email).toLowerCase());
}
const Login = () => {
  const { loginData } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Email or password cannot be empty");
      setEmail("");
      setPassword("");
      loginData(null);
      return;
    }
    if (!validateEmail(email)) {
      setError("Email not valid");
      setEmail("");
      setPassword("");
      loginData(null);
      return;
    }

    loginData(email);
  };
  const propsForLogin = {
    handleSubmit,
    styles,
    email,
    setEmail,
    password,
    error,
    setPassword,
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> Login Form</h1>
      <LoginForm {...propsForLogin} />
    </div>
  );
};

export default Login;
