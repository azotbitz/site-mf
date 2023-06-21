import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import Hero from "./Hero";

const Layout = () => {
    return (
        <>

            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;