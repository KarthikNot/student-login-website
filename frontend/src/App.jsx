import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home.jsx";
import AddStudent from "./components/addStudent.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addStudent" element={<AddStudent />} />
    </Routes>
  );
}; 

export default App;
