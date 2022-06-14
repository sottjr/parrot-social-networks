import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import Profile from './pages/Profile';

const MyRoutes: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cadastro' element={<SingUp/>}/>
            <Route path='/perfil' element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;