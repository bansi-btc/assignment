import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<>Himanshu</>} />
      <Route path="/:id" element={<Home />} />
    </Routes>
  );
};

export default App;
