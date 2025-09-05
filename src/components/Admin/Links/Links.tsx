import React from 'react';
import DashboardLayout from '@/components/DasbhboardLayout';
import CheckoutLinks from './CheckoutLinks';

const Links = () => {
  return (
    <DashboardLayout>
      <div className='max-w-[1312px] w-full mx-auto text-white pt-4 sm:pt-6'>
        <CheckoutLinks />
      </div>
    </DashboardLayout>
  );
};

export default Links;