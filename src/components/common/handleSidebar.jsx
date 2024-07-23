import React from 'react';
import { RiCloseLine, RiMenu3Fill } from 'react-icons/ri';

const HendleSidebar = ({ handleSidebar, sidebar }) => {
    return (
        <button
            onClick={handleSidebar}
            className='fixed bottom-4 right-4 bg-purple-600 p-2 text-white rounded-full text-2xl block lg:hidden z-50'>
            {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
    );
};

export default HendleSidebar;