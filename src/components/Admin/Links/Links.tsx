import React from 'react';
import DashboardLayout from '@/components/DasbhboardLayout';
import CheckoutLinks from './CheckoutLinks';

const Links = () => {
  return (
    <DashboardLayout>
      <div className='max-w-[1312px] w-full mx-auto text-white  py-4 lg:py-0'>
        <CheckoutLinks />
      </div>
    </DashboardLayout>
  );
};

export default Links;