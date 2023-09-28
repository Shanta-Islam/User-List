import React, { useContext } from 'react';
import { AppContext } from '../Context';
import User from '../User/User';


const Home = () => {
    const {users} = useContext(AppContext);
    // console.log(users);
    return (
        <div>
            <h3 className='mt-5 text-xl font-medium'>All Users: {users.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-3 mx-auto my-10">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
            
        </div>

    );
};

export default Home;