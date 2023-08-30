import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Featured from './pages/Featured';
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path='/Login' Component={Login}></Route>
      <Route path='/Featured' Component={Featured}></Route>
      <Route path='/Register' Component={Register}></Route>
      <Route path='/Cart' Component={Cart}></Route>
      <Route path='/Search' Component={Search}></Route>
      <Route path='/Home' Component={Home}></Route>
    </Routes>
  )
}

export default App