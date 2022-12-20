import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import { Routes, Route } from "react-router-dom";
import Navbar1 from "./Components/Navbar"
import Main from "./Pages/Main"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
    </Routes>
  );
}

export default App;
