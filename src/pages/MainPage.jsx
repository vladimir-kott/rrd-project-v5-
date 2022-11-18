import React from "react";
import { NavLink, Link } from "react-router-dom";
import BackgroundGradiend from "../components/BackgroundGradient";
const MainPage = () => {
    return (
        <div className='bg-gray-50 flex justify-center items-center grow '>
            <BackgroundGradiend />
            <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex items-center justify-between flex-col'>
               
                <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
                    <div className='inline-flex rounded-md shadow'>
                        <NavLink
                            to='/posts'
                            className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
                        >
                            Get started
                        </NavLink>
                    </div>
                    <div className='ml-3 inline-flex rounded-md shadow'>
                        <Link
                            to={{
                                pathname:
                                    "https://reactrouter.com/docs/en/v6/upgrading/v5",
                            }}
                            target='_blank'
                            className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50'
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
