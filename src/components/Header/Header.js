import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-white py-4'>
            <Link to='/' className='mx-2'>Home</Link>
            <Link to='/about' className='mx-2'>About</Link>
        </nav>
    );
};

export default Header;