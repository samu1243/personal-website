import React from "react";
import { Routes, Route } from "react-router";
import './App.scss';
import About from "./components/About";
import Home from "./components/Home";
import Layout from "./components/Layout";


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
