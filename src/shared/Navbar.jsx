import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          {/* <img className='w-auto h-7' src={logo} alt='' /> */}
          <span className='font-bold'>MarketNest</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/jobs'>All Jobs</Link>
          </li>

          {/* {!user && ( */}
            <li>
              <Link to='/login'>Login</Link>
            </li>
          {/* )} */}
        </ul>

        
      </div>
    </div>
    );
};

export default Navbar;