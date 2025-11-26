import React from "react";
import BlogCard from "./BlogCard.jsx";

function BlogList() {
  const blogs = [
    {
      title: "My First Blog",
      description: "This is my first blog post made using React!",
      author: "Muskan",
    },
    {
      title: "React Learning",
      description: "Today I learned about components, props, and state.",
      author: "Yug",
    },
    {
      title: "MERN Internship",
      description: "Week-3-Day 6-7: Learning to build UI using React.",
      author: "Muskan",
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Latest Blogs</h2>

      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          description={blog.description}
          author={blog.author}
        />
      ))}
    </div>
  );
}

export default BlogList;
