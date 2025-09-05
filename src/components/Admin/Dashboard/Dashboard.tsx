import React from 'react';
import DashboardLayout from '@/components/DasbhboardLayout';
import HeaderCards from './HeaderCards';
import RecentTransactions from './RecentTransactions';
import WeeklyRevenueOverview from './WeeklyRevenueOverview';
import GrossVolumeFromSales from './GrossVolumeFromSales';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className='max-w-[1312px] w-full mx-auto text-white'>
        <HeaderCards />
        <div className='mt-5 md:mt-8 flex items-start gap-5 md:gap-[34px] lg:flex-row flex-col'>
          <WeeklyRevenueOverview />
          <GrossVolumeFromSales />
        </div>
        <RecentTransactions />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;