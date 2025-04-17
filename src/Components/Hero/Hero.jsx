import React from 'react';
import heroImage from '../../assets/hero.png'

const Hero = () => {
    return (
        <div id='home' className='container mx-auto h-[90vh] md:px-[80px] flex justify-between items-center'>
            <div className='w-[50%]'>
                <h4 className='font-medium text-[17px] text-[#0b0026] uppercase'>
                    Hi, my name is
                </h4>
                <h2 className='font-bold text-[35px] text-[#7c56bc] uppercase leading-[45px]'>
                    md shohag ali
                </h2>
                <h2 className='font-bold text-[25px] text-[#7c56bc] uppercase pb-[10px]'>
                    I'm a frontend developer
                </h2>
                <p className='text-[#575353] font-medium pb-[25px]'>
                    I am a Mern stack developer. I spent more than 2 year to develop my
                    skills. My main objective is to work as a front end developer. The
                    subjects in which I have developed skills are: HTML, CSS, Javascript,
                    React Js, Next Js, Node Js, Express Js, MongoDB, Tailwind css,
                    bootstrap. There are many other topics like redux, context api, git,
                    github, firebase, netlify, render and varcel.
                </p>
                <button className='py-[10px] px-[40px] bg-[#7c56bc] text-[#fff] rounded-full active:scale-[.9] duration-500'>
                    Contacts Me
                </button>
            </div>
            <div className=''>
                <img className='h-[90vh] pt-[30px]' src={heroImage} alt="image" />
            </div>
        </div>
    );
};

export default Hero;