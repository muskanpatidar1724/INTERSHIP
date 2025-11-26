import React from "react";

function BlogCard({ title, description, author }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <small>✍️ {author}</small>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    margin: "15px 0",
    borderRadius: "8px",
    background:"black",
    color:"white",
    
  },
};

export default BlogCard;
