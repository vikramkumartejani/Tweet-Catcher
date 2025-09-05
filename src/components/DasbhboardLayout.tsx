'use client';

import React, { ReactNode } from 'react';
import Header from './Header';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className='min-h-screen'>
            <Header />
            <main className="flex-1 px-4 md:px-6 py-4 md:py-6">
                <div className="w-full max-w-[1312px] mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;