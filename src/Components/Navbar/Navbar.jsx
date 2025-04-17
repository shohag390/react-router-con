import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className='flex sticky top-0 left-0 z-50 container mx-auto items-center justify-between md:px-[80px] h-[10vh] navbar bg-[#400154]'>
            <a href="#home">
                <img className='h-[40px]' src={logo} alt="" />
            </a>
            <ul className='flex items-center gap-[30px]'>
                <li className='text-[#fff] hover:text-[#7c56bc] duration-500 active:scale-[.9]'>
                    <a href="#home">
                        Home
                    </a>
                </li>
                <li className='text-[#fff] hover:text-[#7c56bc] duration-500 active:scale-[.9]'>
                    <a href="#about">
                        About
                    </a>
                </li>
                <li className='text-[#fff] hover:text-[#7c56bc] duration-500 active:scale-[.9]'>
                    <a href="#service">
                        Services
                    </a>
                </li>
                <li className='text-[#fff] hover:text-[#7c56bc] duration-500 active:scale-[.9]'>
                    <a href="#blog">
                        Blog
                    </a>
                </li>
                <li>
                    <a className='py-[8px] px-[30px] bg-[#7c56bc] text-[#fff] rounded-full active:scale-[.9] duration-500' href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;