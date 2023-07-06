import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./pages/successPage";
import Login from "./pages/loginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
