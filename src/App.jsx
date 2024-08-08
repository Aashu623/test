import react, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/contact"
            element={<ProtectedRoute element={<Contact />} />}
          />
          <Route
            path="/services"
            element={<ProtectedRoute element={<Services />} />}
          />
          <Route
            path="/about"
            element={<ProtectedRoute element={<About />} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
