import React, { useState } from 'react';
import Sidebar from './components/Layout/sidebar';
import Header from './components/layout/header';
import HendleSidebar from './components/common/handleSidebar';
import Dashboard from './components/pages/dashboard';

function App() {
    const [sidebar, setSidebar] = useState(false);
    const [dashboard, setDashboard] = useState(false);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    };

    const handleDashboard = () => {
        setDashboard(true);
    };

    return (
        <div className='min-h-screen grid grid-col-1 lg:grid-cols-6 w-full  '>
            {/* Sidebar */}
            <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} handleDashboard={handleDashboard} />
            {/* Btn menu movile */}
            <HendleSidebar handleSidebar={handleSidebar} sidebar={sidebar} />

            {/* Content */}
            <div className='col-span-5'>
                {/* Header */}
                <Header />

                {/* Dashboard */}
                {dashboard && <Dashboard />}
            </div>
        </div>
    );
}

export default App;
