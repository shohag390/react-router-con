import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className='flex justify-between gap-[30px] py-[50px] h-full w-[100%] bg-[#400154] container mx-auto px-[80px] text-[#fff]'>
            <div className='w-[30%]'>
                <a href="#home">
                    <img className='h-[40px]' src={logo} alt="" />
                </a>
                <p className='pt-[15px] font-medium text-justify'>
                    I am a Mern stack developer. I spent more than 2 year to develop my skills. My main objective is to work as a front end developer.
                </p>
            </div>
            <div className='w-[25%] pl-[100px]'>
                <h4 className='text-[20px] font-medium'>
                    Menu Link
                </h4>
                <ul className='flex flex-col gap-[8px] pt-[15px]'>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#service">Service</a>
                    </li>
                    <li>
                        <a href="#blog">Blog</a>
                    </li>
                </ul>
            </div>
            <div className='w-[20%] pl-[20px]'>
                <h4 className='text-[20px] font-medium'>
                    Usefull Link
                </h4>
                <ul className='flex flex-col gap-[8px] pt-[15px]'>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#service">Service</a>
                    </li>
                    <li>
                        <a href="#blog">Blog</a>
                    </li>
                </ul>
            </div>
            <div className='w-[25%]'>
                <h4 className='text-[20px] font-medium'>
                    Contact Me
                </h4>

                <p className='flex flex-col gap-[8px] pt-[15px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nam?</p>
            </div>
        </div>
    );
};

export default Footer;