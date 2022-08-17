import React from "react";
import { Routes, Route } from "react-router";
import './App.scss';
import About from "./components/About";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Projects from "./components/Projects";


function App() {
  return (
    <>
    <Routes basename="/personal-website">
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
