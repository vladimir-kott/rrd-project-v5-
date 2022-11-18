import React from "react";
import { Link } from "react-router-dom";
import User from "./User";

const UserList = () => {


    const Users = [
        {
            key: 'user_1',
            name: 'ivan'
        },
        {
            key: 'user_2',
            name: 'saha'
        },
        {
            key: 'user_3',
            name: 'oleh'
        }
    ]

    return ( 
        <div className='bg-gray-50 flex justify-center items-center grow '>
            <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex items-center flex-col h-full'>
                <p>User List</p>
                <div>
                    {Users.map((user) => {return <Link key={user.key} to='users/:id'>{user.name}</Link>})}
                </div>
            </div>
        </div>
     );
}
 
export default UserList;