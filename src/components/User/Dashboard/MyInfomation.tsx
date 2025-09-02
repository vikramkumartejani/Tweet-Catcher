import Button from '@/components/ui/Button'
import InputField from '@/components/ui/InputField'
import Image from 'next/image'
import React from 'react'

const MyInfomation = () => {
    return (
        <div className='border border-[#3B3D5533] bg-[#13151E] rounded-md lg:max-w-[440px] w-full py-6 sm:py-8 px-4 sm:px-5'>
            <div className='lg:max-w-[354px] w-full mx-auto'>
                <h2 className='text-[15px] font-medium text-white'>My Infomation</h2>
                <p className='text-[#515A69] text-[15px] font-medium mt-1.5'>Manage your payment methods here</p>

                <InputField
                    label="Connected Discord"
                    leftIcon={
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8155 5.64457C16.6367 5.09832 15.3813 4.69582 14.0588 4.46582C13.8959 4.75332 13.7042 5.14624 13.5796 5.46249C12.1805 5.25165 10.7909 5.25165 9.42047 5.46249C9.2863 5.14624 9.09464 4.75332 8.93172 4.46582C7.60922 4.69582 6.3538 5.09832 5.17505 5.64457C2.79839 9.22874 2.1563 12.7267 2.47255 16.1671C4.0538 17.3459 5.57755 18.055 7.08214 18.5246C7.45589 18.0167 7.78172 17.4704 8.06922 16.905C7.52297 16.7038 7.00547 16.445 6.51672 16.1479C6.65089 16.0521 6.77547 15.9467 6.90005 15.8509C9.89963 17.25 13.1484 17.25 16.1096 15.8509C16.2342 15.9563 16.3588 16.0521 16.493 16.1479C16.0042 16.445 15.4771 16.6942 14.9405 16.905C15.228 17.4704 15.5538 18.0167 15.9275 18.5246C17.4321 18.055 18.9655 17.3459 20.5371 16.1671C20.9109 12.1709 19.895 8.71124 17.8346 5.64457H17.8155ZM8.47172 14.0588C7.57089 14.0588 6.83297 13.225 6.83297 12.1996C6.83297 11.1742 7.55172 10.3404 8.47172 10.3404C9.39172 10.3404 10.12 11.1742 10.1105 12.1996C10.1105 13.2154 9.39172 14.0588 8.47172 14.0588ZM14.5188 14.0588C13.618 14.0588 12.88 13.225 12.88 12.1996C12.88 11.1742 13.5988 10.3404 14.5188 10.3404C15.4388 10.3404 16.1671 11.1742 16.1575 12.1996C16.1575 13.2154 15.4388 14.0588 14.5188 14.0588Z" fill="white" />
                        </svg>
                    }
                    placeholder="Enter discord"
                    required
                    width="w-full"
                    defaultValue='johnthelegend'
                    className='mt-8 sm:mt-9'
                    inputClassName="text-white text-[14px] font-medium"
                />

                <Button className='mt-5 h-[38px] text-[14px] font-medium rounded-md w-full'>Update Discord</Button>

                <InputField
                    label="Connected Email"
                    placeholder="Enter email"
                    required
                    width="w-full"
                    defaultValue='email@address.com'
                    className='mt-8 sm:mt-9'
                    inputClassName="text-white text-[14px] font-medium"
                />

                <Button className='mt-5 h-[38px] text-[14px] font-medium rounded-md w-full'>Save Changes</Button>

                <div className='h-[1px] w-full bg-[#FFFFFF1A] my-[28px]' />

                <div className='w-full'>
                    <h3 className='text-[#515A69] text-[14px] font-medium'>Payment Method</h3>

                    {/* Payment Method Card */}
                    <div className='my-5 bg-[#191C27] w-full rounded-md relative px-4 sm:px-[28px] pt-4 pb-5'>
                        <div className=" absolute bottom-0 left-0 h-[3px] w-full rounded-b-md" style={{ background: 'linear-gradient(90deg, #535EE1 0%, #7080FF 100%)' }}></div>

                        <div className='flex items-center justify-between w-full'>
                            <div className='flex items-center gap-2.5 sm:gap-4'>
                                <div className='bg-[#272B3C] rounded-md py-3 px-3 sm:px-5 w-fit'>
                                    <Image src='/assets/icons/mastercard.svg' alt='mastercard' width={45} height={28} className='sm:w-[45px] w-8' />
                                </div>
                                <div>
                                    <div className='mb-1.5 flex items-center gap-[11px]'>
                                        <h2 className='text-[13px] text-white font-medium'>John Doe</h2>
                                        <div className='bg-[#272B3C] flex items-center justify-center rounded-full px-[11px] h-[17px]'>
                                            <h3 className='text-[#8E9AAD] text-[9px] font-medium'>Primary</h3>
                                        </div>
                                    </div>
                                    <h3 className='text-[#515A69] text-[12px] font-medium'>**** 5774</h3>
                                </div>
                            </div>

                            <button className='cursor-pointer'>
                                <Image src='/assets/icons/trash.svg' alt='trash' width={17} height={17} />
                            </button>
                        </div>
                    </div>

                    <button className='text-[#515A69] text-[14px] font-medium text-center cursor-pointer flex items-center justify-center w-full'>Change Payment Method</button>
                </div>
            </div>
        </div>
    )
}

export default MyInfomation