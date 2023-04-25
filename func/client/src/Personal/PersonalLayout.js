import React from 'react';

import { Outlet } from 'react-router-dom';
import PersonalFooter from './PersonalFooter';
import PersonalNavbar from './PersonalNavbar';

const PersonalLayout = () => {
    return (
        <div>
            <PersonalNavbar></PersonalNavbar>
            <Outlet></Outlet>
            <PersonalFooter></PersonalFooter>
        </div>
    );
};

export default PersonalLayout;
