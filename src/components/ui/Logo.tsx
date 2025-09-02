import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <div className='flex items-center gap-3.5 sm:gap-4.5 text-nowrap'>
            <Image src='/assets/logo.svg' alt='logo' width={40} height={40} className='w-9 sm:w-[40px]' />
            <h3 className='text-[14px] sm:text-[15px] font-medium text-white'>Tweet Catcher</h3>
        </div>
    )
}

export default Logo