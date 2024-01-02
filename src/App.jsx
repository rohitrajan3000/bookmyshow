import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

import { Button } from 'react-bootstrap';
import SelectSeat from './components/SelectSeat';
import SignUp from './components/SignUp';
import Success from './components/Success';
import Movie from './components/movie';





function App() {
  const [count, setCount] = useState(0)

  const [user, setUser] = useState('');

  useEffect(() =>{
    const userEmail = localStorage.getItem('userEmail');
    if(userEmail){
      setUser(userEmail);
    }
  },[user]);




  const navigate = useNavigate();

  const handelLogout = () => {
    localStorage.removeItem('userEmail');
    window.location.href = '/login';
  }

  return (
    <div>
      <Navbar bg="light" variant="light" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/vite.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            BookMyShow
          </Navbar.Brand>
          <Button onClick={()=>navigate('/login')} className='Logout-btn'>Logout</Button>
        </Container>
      </Navbar>

      <Routes>
      

      <Route path='/login' element={<Login />} />

        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/select' element={<SelectSeat />} />
        <Route path='/succes' element={<Success />} />

      </Routes>




    </div>
  )
}

export default App
