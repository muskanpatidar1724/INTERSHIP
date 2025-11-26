import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BlogList from "./components/BlogList.jsx";


function App() {
  return (
  <>
      <Navbar />
        <BlogList />
      <Footer />
  
    </>
  );
}

export default App;
