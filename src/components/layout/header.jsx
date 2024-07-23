import React from 'react';
import { RiSearchLine, RiNotification3Line, RiCheckboxBlankCircleFill, RiArrowDownSLine } from 'react-icons/ri';

const Header = () => {
    return (
        <header className='flex flex-col md:px-8  md:flex-row gap-4 items-center justify-between p-4 lg:px-12 w-full '>
            {/* Search */}
            <form className=' w-full lg:w-[30%] md:w-[40%]  order-1 md:order-none '>
                <div className='relative '>
                    <RiSearchLine className='absolute left-2 top-3 text-gray-500' />
                    <input
                        type='text'
                        className='bg-gray-100 py-2 pl-8 pr-4  outline-none rounded-lg w-full '
                        placeholder='Search'
                    />
                </div>
            </form>

            {/* Notifications */}
            <nav className=' w-full lg:w-[70%] md:w-[60%]  flex justify-center  md:justify-end '>
                <ul className='flex items-center gap-4'>
                    <li>
                        <a href="#" className="relative" style={{ display: 'inline-block' }}>
                            <RiNotification3Line className="text-xl text-gray-500" />
                            <RiCheckboxBlankCircleFill className="absolute right-0 top-0 text-xs text-red-500" />
                        </a>
                    </li>
                    <li>
                        <a href='#' className='flex items-center gap-1'>
                            Brayan Mora
                            <RiArrowDownSLine />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;