import React from 'react';
import DashboardLayout from '@/components/DasbhboardLayout';
import CheckoutLinks from './CheckoutLinks';

const Links = () => {
  return (
    <DashboardLayout>
      <div className='px-4 md:px-6 lg:px-8'>
        <div className='max-w-[1312px] w-full mx-auto text-white'>
          <CheckoutLinks />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Links;