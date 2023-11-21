// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Search";
import Singalmovie from "./Singalmovie";
// import DataFatch from "./DataFatch";
const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<Singalmovie />}></Route>
        </Routes>
        {/* <DataFatch/> */}
      </BrowserRouter>
    </>
  );
};

export default App;
