import React, { useState, useEffect } from 'react';
import './Navbar.css'
import logo from '../assets/Лого.svg';
import phoneIcon from '../assets/telephone 1.svg';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className='navbar flex justify-between items-center lg:px-52 w-full h-16 fixed z-50 sm:px-10 2xl:container 2xl:m-auto bg-white'>
      <img src={logo} alt="Logo" />

      <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col items-center gap-6 lg:flex lg:flex-row lg:gap-10 lg:static absolute top-16 left-0 w-full lg:w-auto h-screen lg:h-auto lg:p-0 p-5 bg-white lg:bg-transparent transition-all duration-300`}
      >
        <a href="#" className='hover:text-[#6E9C9F] mb-4 lg:mb-0'>Главная</a>
        <a href="#" className='hover:text-[#6E9C9F] mb-4 lg:mb-0'>Магазин</a>
        <a href="#" className='hover:text-[#6E9C9F] mb-4 lg:mb-0'>О бренде</a>
        <a href="#" className='hover:text-[#6E9C9F] mb-4 lg:mb-0'>Контакты</a>
      </div>

      <div className='hidden lg:flex items-center gap-6'>
        <a href="tel" className='flex gap-3'><img src={phoneIcon} alt="Phone Icon" /> +7 (495) 823-54-12</a>
        <HiOutlineShoppingBag />
      </div>
    </div>
  );
}
