import React from "react";
import axios from "axios";
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './components/pages/Landing/Landing.jsx';
import Home from './components/pages/Layout/Home/Home.jsx';
import Activities from './components/pages/Activities/Activities.jsx';
import Detail from './components/pages/Detail/Detail.jsx';
import Header from './components/common/Header/Header.jsx';
import Footer from './components/common/Footer/Footer.jsx';

axios.defaults.baseURL = "http://localhost:3001";

const Content = () => {
  const location = useLocation();

  return (
    <div className="App">

      {location.pathname !== '/' && <Header />}
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
};

export default Content;