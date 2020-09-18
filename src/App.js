import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Navbar />
        <About />
      </div>
    </Router>
  );
}

export default App;
