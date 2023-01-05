import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Pages/Footer';
import '../App.css'

const Main = () => {
    return (
        <div className='App'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;