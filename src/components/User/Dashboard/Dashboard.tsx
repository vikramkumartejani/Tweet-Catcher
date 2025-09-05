import React from 'react';
import DashboardLayout from '@/components/DasbhboardLayout';
import WelcomeHeader from './WelcomeHeader';
import MyInfomation from './MyInfomation';
import ManagePlan from './ManagePlan';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className='my-4 sm:my-6'>
        <div className='text-white max-w-[1312px] mx-auto w-full'>
          <WelcomeHeader />
          <div className='mt-6 sm:mt-8 lg:mt-12 flex items-start lg:flex-row flex-col justify-between w-full gap-6 sm:gap-8 xl:gap-[55px]'>
            <MyInfomation />
            <ManagePlan />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;