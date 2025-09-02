import React from 'react';
import DashboardLayout from '@/components/DasbhboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className='px-4 md:px-6 lg:px-8'>
        <div className='max-w-[1312px] w-full mx-auto text-white'>
          Dashboard Admin
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;