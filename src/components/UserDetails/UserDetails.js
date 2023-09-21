import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const UserData = useLoaderData();
    console.log(UserData.name)
    return (
        <div className="flex justify-center my-10">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="flex flex-col items-center p-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={UserData?.image ? UserData?.image : 'https://i.ibb.co/3hPGXKY/default.png'} alt="" />
                    <h5 className="mb-1 text-xl font-medium">{UserData.name}</h5>
                    <span className="text-sm text-gray-800">Email: {UserData.email}</span>
                    <span className="text-sm text-gray-800">City: {UserData.address.city}</span>
                    <span className="text-sm text-gray-800">Website Name: {UserData.website}</span>
                    <span className="text-sm text-gray-800">Phone: {UserData.phone}</span>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;