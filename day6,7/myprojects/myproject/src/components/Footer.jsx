import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 My Blog. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "30px",
    padding: "15px",
    background: "black",
    color: "white",
    textAlign: "center",
  },
};

export default Footer;
