import React from 'react';

import Footer from '../Shared/Footer';
import Navigation from '../Shared/Navigation';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;