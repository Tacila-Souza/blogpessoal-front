// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {

  return (
    <>
    <BrowserRouter>

      <Navbar/>
        <div className="min-h-[80vh]">

          <Routes>

            {/* <Route path='/' element={<Home/>} /> */}
            <Route path='/home' element={<Home/>} />
            <Route path='/cadastro' element={<Cadastro/>} />
            <Route path="/" element={<Login />} />

          </Routes>

        </div>
      <Footer/>
      
    </BrowserRouter>
    </>
  )
}

export default App;
