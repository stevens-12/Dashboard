import React from 'react';
import { RiDashboardLine, RiBriefcaseLine, RiCalendar2Line, RiMessage2Line, RiLogoutBoxRLine } from 'react-icons/ri';

const Sidebar = ({ sidebar, handleSidebar, handleDashboard }) => {
    return (
        <div className={`fixed lg:sticky lg:h-screen w-full md:w-[40%] lg:w-full top-0 min-w-[210px]
                        ${sidebar ? 'left-0' : '-left-full'}
                        h-full overflow-y-auto lg:overflow-hidden col-span-1 p-8 border-r border-gray-100 bg-white transition-all z-40 flex flex-col justify-between`}>
            {/* Logotipo */}
            <div className="text-center px-2 py-8">
                <h1 className="uppercase font-bold tracking-[4px]">
                    Tu logo
                </h1>
            </div>

            {/* Menu */}
            <nav className="flex-grow">
                <ul className='space-y-2'>
                    <li>
                        <a href="#" onClick={handleDashboard} className="flex items-center gap-4 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors text-gray-400 font-semibold">
                            <RiDashboardLine className="min-w-[24px]" />
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-4 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors text-gray-400 font-semibold">
                            <RiBriefcaseLine />
                            Tasks
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-4 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors text-gray-400 font-semibold">
                            <RiCalendar2Line />
                            Shedule
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-4 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors text-gray-400 font-semibold">
                            <RiMessage2Line />
                            Messenger
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Log out */}
            <div className="mt-auto">
                <a href="#" className="flex items-center gap-4 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors text-gray-400 font-semibold">
                    <RiLogoutBoxRLine />
                    Log out
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
