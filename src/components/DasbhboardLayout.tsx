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
            <main className="pt-6 sm:pt-8">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;