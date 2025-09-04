import React from 'react';
import DashboardLayout from '@/components/DasbhboardLayout';
import HeaderCards from './HeaderCards';
import RecentTransactions from './RecentTransactions';
import WeeklyRevenueOverview from './WeeklyRevenueOverview';
import GrossVolumeFromSales from './GrossVolumeFromSales';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className='px-4 md:px-6 lg:px-8'>
        <div className='max-w-[1312px] w-full mx-auto text-white'>
          <HeaderCards />
          <div className='mt-8 flex items-start gap-[34px] lg:flex-row flex-col'>
            <WeeklyRevenueOverview />
            <GrossVolumeFromSales />
          </div>
          <RecentTransactions />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;