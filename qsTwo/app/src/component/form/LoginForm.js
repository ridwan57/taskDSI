import React from "react";

const LoginForm = (props) => {
  const {
    handleSubmit,
    styles,
    email,
    setEmail,
    password,
    error,
    setPassword,
  } = props;
  return (
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
      {error && <h1 className={styles.error}>{error}</h1>}
    </form>
  );
};

export default LoginForm;
