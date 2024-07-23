import React, { useState } from 'react';
import Axios from '../axios/axios';

import {
    RiCloseLine,
    RiArrowDownSLine,
    RiSearchLine,
    RiFilter3Line,
    RiMapPinLine,
    RiAccountPinCircleLine
} from 'react-icons/ri';

const Dashboard = () => {
    const [showAxios, setShowAxios] = useState(false);

    const handleCardClick = () => {
        setShowAxios(true);
    };

    const handleBackClick = () => {
        setShowAxios(false);
    };

    return (
        <div className='min-h-screen p-4 lg:p-12 md:p-8 bg-gray-100'>
            {/* Title */}
            <div className='mb-8'>
                <h1 className='text-3xl font-semibold '>Dashboard</h1>
            </div>

            {/* Search */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 item-center mb-6 '>
                <form className=' col-span-1 mb:col-span-2 '>
                    <div className='relative '>
                        <RiSearchLine className='absolute left-2 top-3 text-purple-600' />
                        <input
                            type='text'
                            className='bg-white py-2 pl-8 pr-4  outline-none w-full '
                            placeholder='Search'
                        />
                    </div>
                </form>

                <form className='col-span-1 '>
                    <div className='relative '>
                        <RiMapPinLine className='absolute left-2 top-3 text-purple-600' />
                        <select
                            type='text'
                            className='bg-white py-[9px] pl-8 pr-4  outline-none w-full '>
                            <option>Anywhere</option>
                            <option>Colombia</option>
                            <option>Argentina</option>
                            <option>Costa Rica</option>
                            <option>Uruguay</option>
                        </select>
                    </div>
                </form>
                <form className=' col-span-1'>
                    <div className='relative '>
                        <RiFilter3Line className='absolute left-2 top-3 text-purple-600' />
                        <input
                            type='text'
                            className='bg-white py-2 pl-8 pr-4  outline-none w-full '
                            placeholder='Filters'
                        />
                        <span className='absolute right-2 top-[7px] text-sm bg-purple-600 text-white py-1 px-[10px] rounded-full'>
                            4
                        </span>
                    </div>
                </form>
            </div>

            {/* Buttons */}

            <div className='flex item-center flex-wrap  gap-4 mb-8'>
                <span className='bg-white flex items-center gap-4 py-2 pl-4  pr-6 rounded-full  '>
                    <button className='bg-purple-100 p-1 rounded-full text-purple-600 text-xs '>
                        <RiCloseLine />
                    </button>
                    <span className='text-gray-500'>Collections</span>
                </span>

                <span className='bg-white flex items-center gap-4 py-2 pl-4  pr-6 rounded-full  '>
                    <button className='bg-purple-100 p-1 rounded-full text-purple-600 text-xs '>
                        <RiCloseLine />
                    </button>
                    <span className='text-gray-500'>Environments</span>
                </span>

                <span className='bg-white flex items-center gap-4 py-2 pl-4  pr-6 rounded-full  '>
                    <button className='bg-purple-100 p-1 rounded-full text-purple-600 text-xs '>
                        <RiCloseLine />
                    </button>
                    <span className='text-gray-500'>History</span>
                </span>
                <button className='text-gray-500 ml-4 hover:text-purple-600'>
                    Clear All
                </button>
            </div>

            {/* Results */}

            <div className=' flex items-center justify-between mb-8 '>
                <p className='text-gray-500'>
                    Workspaces{' '}
                    <span className='text-purple-600 font-semibold'>
                        8
                    </span>{' '}
                </p>

                <p className='flex items-center gap-2 '>
                    Workspace:{' '}
                    <span className='text-purple-600 font-semibold hover:cursor-pointer '>
                        Login QA
                    </span>{' '}
                    <RiArrowDownSLine />
                </p>
            </div>

            {showAxios ? (
                <div>
                    <Axios />
                    <button onClick={handleBackClick}
                        className='text-gray-500 ml-4 hover:text-purple-600'>Back to</button>
                </div>
            ) : (
                <>

                    {/* CARD */}
                    <a
                        href='#'
                        className='bg-white rounded-2xl p-6 flex flex-col md:flex-row gap-8 w-full   shadow-lg hover:border-purple-300 transition-all border-2 border-transparent mb-4 '
                        onClick={handleCardClick}
                    >
                        {/* ICONO */}
                        <div className='  w-full  md:w-[7%] flex items-center  justify-start md:justify-center lg:justify-start '>
                            <RiAccountPinCircleLine className='text-7xl rounded-md bg-purple-100 text-purple-600 p-3' />
                        </div>

                        {/* Title card */}
                        <div className=' w-full md:w-[73%] '>
                            <h1 className='text-xl flex items-center gap-4 mb-2'>
                                Collections
                                <span className='text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold'>
                                    new
                                </span>
                                <span className='text-xs py-1 px-2 bg-green-100 text-green-600 font-bold'>
                                    import
                                </span>
                            </h1>
                            <p className='text-gray-500'>
                                Login ---- Esquemas
                            </p>
                        </div>

                        {/* Time */}
                        <div className='w-full md:w-[20%] flex flex-col items-end'>
                            <h3 className='text-xl text-gray-500 mb-2  '>
                                2 Collections
                            </h3>
                            <p className='text-gray-500'>Last updated 2 days ago</p>
                        </div>
                    </a>

                    {/* CARD 2*/}
                    <a
                        href='#'
                        className='bg-white rounded-2xl p-6 flex flex-col md:flex-row gap-8 w-full   shadow-lg hover:border-purple-300 transition-all border-2 border-transparent mb-4 '>
                        {/* ICONO */}
                        <div className='  w-full  md:w-[7%] flex items-center  justify-start md:justify-center lg:justify-start '>
                            <RiAccountPinCircleLine className='text-7xl rounded-md bg-purple-100 text-purple-600 p-3' />
                        </div>

                        {/* Title card */}
                        <div className=' w-full md:w-[73%] '>
                            <h1 className='text-xl flex items-center gap-4 mb-2'>
                                Environments
                                <span className='text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold'>
                                    new
                                </span>
                                <span className='text-xs py-1 px-2 bg-green-100 text-green-600 font-bold'>
                                    import
                                </span>
                            </h1>
                            <p className='text-gray-500'>Globals</p>
                        </div>

                        {/* Time */}
                        <div className='w-full md:w-[20%] flex flex-col items-end'>
                            <h3 className='text-xl text-gray-500 mb-2  '>
                                4 Environments
                            </h3>
                            <p className='text-gray-500'>Last updated 1 days ago</p>
                        </div>
                    </a>

                    {/* CARD 3*/}
                    <a
                        href='#'
                        className='bg-white rounded-2xl p-6 flex flex-col md:flex-row gap-8 w-full   shadow-lg hover:border-purple-300 transition-all border-2 border-transparent mb-4 '>
                        {/* ICONO */}
                        <div className='  w-full  md:w-[7%] flex items-center  justify-start md:justify-center lg:justify-start '>
                            <RiAccountPinCircleLine className='text-7xl rounded-md bg-purple-100 text-purple-600 p-3' />
                        </div>

                        {/* Title card */}
                        <div className=' w-full md:w-[73%] '>
                            <h1 className='text-xl flex items-center gap-4 mb-2'>
                                History
                                <span className='text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold'>
                                    new
                                </span>
                                <span className='text-xs py-1 px-2 bg-yellow-100 text-yellow-600 font-bold'>
                                    import
                                </span>
                            </h1>
                            <p className='text-gray-500'>You haven´t sent any request</p>
                        </div>

                        {/* Time */}
                        <div className='w-full md:w-[20%] flex flex-col items-end'>
                            <h3 className='text-xl text-gray-500 mb-2  '>
                                0 History
                            </h3>
                            <p className='text-gray-500'>Last update ...</p>
                        </div>
                    </a>
                </>
            )}
        </div>
    );
};

export default Dashboard;