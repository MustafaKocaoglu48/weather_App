import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import WeatherApp from "./WeatherApp";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
    </Router>
  );
}

export default App;
