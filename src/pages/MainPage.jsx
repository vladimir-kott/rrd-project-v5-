import React from "react";
import { NavLink, Link } from "react-router-dom";
const MainPage = () => {
    return (
        <div className='bg-gray-50 flex justify-center items-center grow '>
            <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex items-center flex-col h-full'>
               <NavLink to='/users'>
                User list
               </NavLink>
            </div>
        </div>
    );
};

export default MainPage;
