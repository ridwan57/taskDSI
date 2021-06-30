import React, { useState } from "react";
import styles from "./Login.module.css";
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
validateEmail("ridwan@gmail.com");
const Login = ({ loginData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState();
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
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> Login Form</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className={styles.btn} onClick={handleSubmit}>
          Login
        </button>
        {error && (
          <h1
          // style={{ color: "red" }}
          >
            Error: {error}
          </h1>
        )}
      </form>
    </div>
  );
};

export default Login;
