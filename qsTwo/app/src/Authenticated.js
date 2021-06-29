import React from "react";

const Authenticated = ({ user, logout }) => {
  return (
    <div>
      <h1>{user} logged in</h1>
      <button style={{ cursor: "pointer" }} onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Authenticated;
