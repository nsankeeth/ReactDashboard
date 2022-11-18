import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import HomePage from "./HomePage";
import WeatherPage from "./WeatherPage";
import ToolsPage from "./ToolsPage";
import NewsPage from "./NewsPage";
import PokemonPage from "./PokemonPage";

// React route definitions
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/weather" element={<WeatherPage />} />
          <Route exact path="/news" element={<NewsPage />} />
          <Route exact path="/pokemon" element={<PokemonPage />} />
          <Route exact path="/tools" element={<ToolsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
