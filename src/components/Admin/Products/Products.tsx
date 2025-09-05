import React from 'react';
import DashboardLayout from '@/components/DasbhboardLayout';
import MyProducts from './MyProducts';

const Products = () => {

  return (
    <DashboardLayout>
      <div className='max-w-[1312px] w-full mx-auto text-white py-4 lg:py-0'>
        <MyProducts />
      </div>
    </DashboardLayout>
  );
};

export default Products;