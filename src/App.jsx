import React from "react";
import "./App.css";
import { AppProvider } from "./AppContext";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LongArticle from "./Components/LongArticle";
import AddBlog from "./Components/AddBlog";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<LongArticle />} />
          <Route path="/addBlog" element={<AddBlog/>}/>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
