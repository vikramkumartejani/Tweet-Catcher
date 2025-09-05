import React from 'react';
import DashboardLayout from '@/components/DasbhboardLayout';
import MyProducts from './MyProducts';

const Products = () => {

  return (
    <DashboardLayout>
      <div className='max-w-[1312px] w-full mx-auto text-white'>
        <MyProducts />
      </div>
    </DashboardLayout>
  );
};

export default Products;