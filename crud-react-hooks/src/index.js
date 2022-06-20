import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditUser from "./components/EditUser";
// import UserInterface from "./components/UserInterface";

// import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  </Router>
);
