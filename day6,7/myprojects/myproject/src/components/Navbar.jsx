import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>My Blog</h2>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#333",
    color: "white",
    padding: "12px",
    textAlign: "center",
  },
  logo: {
    margin: 0,
  },
};

export default Navbar;

