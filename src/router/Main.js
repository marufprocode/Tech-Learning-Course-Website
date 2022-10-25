import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../sharedComponents/Footer/Footer';
import Header from '../sharedComponents/Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;