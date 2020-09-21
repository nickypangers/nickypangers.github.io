import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Navbar />
        <About />
        <Project />
      </div>
    </Router>
  );
}

export default App;
