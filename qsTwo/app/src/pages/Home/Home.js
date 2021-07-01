import React from "react";
import { useAuth } from "../../hooks/useAuth";
import styles from "./Home.module.css";
const Home = () => {
  const { user, logout } = useAuth();
  if (!user) return null;
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <button className={styles.btn} onClick={logout}>
          Logout
        </button>
        <button className={styles.btn}>
          {user.toString().split("@")[0].slice(0, 6)}
        </button>
      </div>
      <h1 className={styles.heading}>{user} logged in</h1>
    </div>
  );
};

export default Home;
