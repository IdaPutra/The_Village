import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar1 from "./Components/Navbar"
import Main from "./Pages/Main"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import './index.css'
import Functional from "./Pages/Functions"

function App() {



  
  return (
    
   
      <div className="App" >
        <Routes>
         <Route path="/" element={ <Main/>} exact />\
         <Route path="/functions" element={<Functional/> } exact />
         <Route path="/SignUp" element={<SignUp/>} exact />
        </Routes>
      </div>

 
  );
}

export default App;
