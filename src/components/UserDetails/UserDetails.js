import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context';
import {useParams } from 'react-router-dom';


const UserDetails = () => {
    const {users} = useContext(AppContext);
    const [singleUser, setSingleUser] = useState({});  
    const {userId} = useParams();
    // console.log(typeof(userId));
    useEffect(()=>{
        const findUser = users.find(user=> user.id == userId);
        setSingleUser(findUser);
    }, [users , userId]);
//    console.log(singleUser);
    return (
        <div className="flex justify-center my-10">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="flex flex-col items-center p-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={singleUser?.image ? singleUser?.image : 'https://i.ibb.co/3hPGXKY/default.png'} alt="" />
                    <h5 className="mb-1 text-xl font-medium">{singleUser.name}</h5>
                    <span className="text-sm text-gray-800">Email: {singleUser.email}</span>
                    <span className="text-sm text-gray-800">Website Name: {singleUser.website}</span>
                    <span className="text-sm text-gray-800">Phone: {singleUser.phone}</span>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;