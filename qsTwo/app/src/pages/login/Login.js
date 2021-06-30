import React, { useState } from "react";
import LoginForm from "../../component/form/LoginForm";
import { useAuth } from "../../hooks/useAuth";
import styles from "./Login.module.css";
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
validateEmail("ridwan@gmail.com");
const Login = () => {
  console.log("login");
  const { loginData } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password, email);
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
