import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    const [theme , setTheme] = useState(true)
    return (
        <>
            <div data-theme={`${theme ? 'light' : 'dark'}`}>
                <Navbar theme={theme} setTheme={setTheme}></Navbar>
                <main className='min-h-[calc(100vh-262px)]'>
                    <Outlet></Outlet>
                </main>

                <Footer></Footer>
            </div>
        </>
    );
};

export default HomeLayout;