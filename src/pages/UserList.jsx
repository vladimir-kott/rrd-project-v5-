import React from "react";
import { NavLink } from "react-router-dom";
import User from "./User";
import { useRouteMatch, Switch, Route } from "react-router-dom";

const UserList = () => {


    const Users = [
        {
            key: 'user_1',
            name: 'ivan',
            id: 1
        },
        {
            key: 'user_2',
            name: 'saha',
            id: 2
        },
        {
            key: 'user_3',
            name: 'oleh',
            id: 3
        }
    ]

    let { path } = useRouteMatch();

    return ( 
        <div className='bg-gray-50 flex justify-center items-center grow '>
            <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex items-center flex-col h-full'>
                <p>User List</p>
                <div>
                    {Users.map((user) => {return <NavLink key={user.key} to='users/:id'><p>{user.name}</p></NavLink>})}
                </div>
                    <NavLink to='/'>Home page</NavLink>
            </div>
        </div>
     );
}
 
export default UserList;