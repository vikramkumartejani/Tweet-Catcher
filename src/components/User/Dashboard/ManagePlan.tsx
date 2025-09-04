"use client"
import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import InputField from '@/components/ui/InputField'
import PurchaseAddOns from './PurchaseAddOns'

const ManagePlan = () => {
    const [showPurchaseModal, setShowPurchaseModal] = useState(false)
    const [loadingStates, setLoadingStates] = useState<{[key: string]: boolean}>({})

    const addOns = [
        {
            id: 1,
            title: "25 Extra Tasks",
            features: ["More flexibility", "Allow for more monitoring to be done"],
            price: "$15.00"
        },
        {
            id: 2,
            title: "50 Extra Tasks",
            features: ["More flexibility", "Allow for more monitoring to be done"],
            price: "$25.00"
        },
        {
            id: 3,
            title: "75 Extra Tasks",
            features: ["More flexibility", "Allow for more monitoring to be done"],
            price: "$35.00"
        }
    ]

    return (
        <>
            <div className='border border-[#3B3D5533] bg-[#13151E] rounded-md w-full lg:max-w-[818px] lg:min-w-[570px] pb-6 pt-6 sm:pt-8 px-4 sm:px-5'>
                <div className='lg:max-w-[743px] mx-auto w-full'>
                    {/* Header */}
                    <div className='flex items-start sm:items-center justify-between flex-wrap gap-1.5 sm:flex-row flex-col mb-6'>
                        <h1 className='text-white text-[15px] font-medium'>Manage Plan</h1>
                        <div className='text-[#515A69] text-[14px] font-medium'>
                            Tweet Catcher Cloud Monitor
                        </div>
                    </div>

                    {/* Plan Details */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 xl:gap-[34px] mb-5'>
                        {/* My Key */}
                        <InputField
                            label="My Key"
                            defaultValue="email@address.com"
                            readOnly
                            className="w-full"
                            inputClassName="text-[#727A89] text-[14px] font-medium"
                        />

                        {/* Device ID */}
                        <InputField
                            label="Device ID"
                            defaultValue="email@address.com"
                            readOnly
                            className="w-full"
                            inputClassName="text-[#727A89] text-[14px] font-medium"
                        />
                    </div>

                    {/* Usage Left */}
                    <div className='mb-6'>
                        <div className='flex items-center justify-between mb-3'>
                            <h3 className='text-[#515A69] text-[14px] font-medium'>Usage Left</h3>
                            <div className='text-[#515A69] text-[13px] sm:text-[14px] font-medium'>
                                <span className='text-white'>6 Days Left </span>  / 30 Days
                            </div>
                        </div>

                        <div className='w-full h-[7px] bg-[#222531] rounded-full overflow-hidden'>
                            <div
                                className='h-full rounded-l-full'
                                style={{
                                    width: '20%',
                                    background: 'linear-gradient(90deg, #535EE1 0%, #626FF0 100%)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className='flex items-end sm:items-center sm:flex-row flex-col gap-3.5 sm:gap-5 mb-6'>
                        <input type="text" placeholder='$25.00 / month' defaultValue='$25.00 / month' readOnly className='bg-[#191C27] rounded-md h-[38px] text-[#727A89] text-[14px] font-medium outline-none w-full sm:w-[353px] px-4' />
                        <Button
                            onClick={() => {
                                setLoadingStates(prev => ({ ...prev, 'cancel-plan': true }))
                                // Simulate API call
                                setTimeout(() => {
                                    console.log('Cancel plan')
                                    setLoadingStates(prev => ({ ...prev, 'cancel-plan': false }))
                                }, 1000)
                            }}
                            loading={loadingStates['cancel-plan']}
                            loadingText="Cancelling..."
                            disabled={loadingStates['cancel-plan']}
                            className="text-[#FF6666] text-[14px] font-medium cursor-pointer text-nowrap bg-transparent hover:bg-transparent p-0 h-[38px]"
                        >
                            Cancel Plan
                        </Button>
                    </div>

                    <div className='h-[1px] w-full bg-[#FFFFFF1A] mb-6' />

                    {/* My Add-ons */}
                    <div className='flex items-end sm:items-center sm:flex-row flex-col gap-3.5 sm:gap-11 mb-5'>
                        <div className='sm:w-fit w-full'>
                            <h2 className='text-white text-[15px] font-semibold mb-1.5'>My Add-ons</h2>
                            <p className='text-[#515A69] text-[15px] font-medium'>View your add-ons here</p>
                        </div>
                        <Button
                            onClick={() => setShowPurchaseModal(true)}
                            className='px-4.5 h-[34px] rounded-md text-[14px] text-[#707BFF] cursor-pointer font-medium bg-[#212430] hover:bg-[#2A2F3A]'
                        >
                            Buy Add-ons
                        </Button>
                    </div>

                    {/* Add-ons List */}
                    <div className='flex flex-col gap-4 w-full'>
                        {addOns.map((addon) => (
                            <div key={addon.id} className='bg-[#191C27] rounded-md px-4 sm:px-5 xl:px-[28px] pr-5 sm:pr-8 xl:pr-10 py-4 relative'>
                                <div className='absolute right-0 top-0 bottom-0 w-[3px] rounded-r-md' style={{ background: "linear-gradient(90deg, #535EE1 0%, #7080FF 100%)" }} />
                                <div className='w-full flex items-end xl:items-center justify-between xl:flex-row lg:flex-col sm:flex-row flex-col gap-3'>
                                    <div className='w-full flex-1'>
                                        <h3 className='text-white text-[13px] font-medium mb-1.5 sm:mb-[5px]'>{addon.title}</h3>
                                        <div className='flex items-center gap-1.5 sm:gap-3.5 flex-wrap xl:gap-5 text-[#515A69] text-[13px] font-medium'>
                                            {addon.features.map((feature, index) => (
                                                <div key={index} className='flex items-center gap-[7px]'>
                                                    <svg width="14" height="14" className='min-w-[14px]' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.7143 4.4019L5.71427 11.4019C5.65331 11.4631 5.58086 11.5116 5.50109 11.5447C5.42132 11.5779 5.3358 11.5949 5.24943 11.5949C5.16306 11.5949 5.07754 11.5779 4.99777 11.5447C4.918 11.5116 4.84555 11.4631 4.78459 11.4019L1.72209 8.3394C1.66104 8.27836 1.61262 8.20589 1.57958 8.12613C1.54654 8.04637 1.52954 7.96089 1.52954 7.87456C1.52954 7.78823 1.54654 7.70274 1.57958 7.62298C1.61262 7.54323 1.66104 7.47076 1.72209 7.40971C1.78313 7.34867 1.8556 7.30025 1.93536 7.26721C2.01512 7.23417 2.1006 7.21717 2.18693 7.21717C2.27326 7.21717 2.35874 7.23417 2.4385 7.26721C2.51826 7.30025 2.59073 7.34867 2.65177 7.40971L5.24998 10.0079L11.7857 3.47331C11.909 3.35002 12.0762 3.28076 12.2505 3.28076C12.4249 3.28076 12.5921 3.35002 12.7154 3.47331C12.8387 3.59659 12.9079 3.7638 12.9079 3.93815C12.9079 4.1125 12.8387 4.27971 12.7154 4.40299L12.7143 4.4019Z" fill="#535EE1" />
                                                    </svg>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Button
                                        onClick={() => {
                                            setLoadingStates(prev => ({ ...prev, [`cancel-addon-${addon.id}`]: true }))
                                            // Simulate API call
                                            setTimeout(() => {
                                                console.log('Cancel addon plan:', addon.id)
                                                setLoadingStates(prev => ({ ...prev, [`cancel-addon-${addon.id}`]: false }))
                                            }, 1000)
                                        }}
                                        loading={loadingStates[`cancel-addon-${addon.id}`]}
                                        loadingText="Cancelling..."
                                        disabled={loadingStates[`cancel-addon-${addon.id}`]}
                                        className='text-[#FF6666] h-[34px] px-6 bg-[#212430] rounded-[5px] cursor-pointer text-[13px] font-medium hover:bg-[#2A2F3A]'
                                    >
                                        Cancel Plan
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Purchase Add-ons Modal */}
            {showPurchaseModal && (
                <PurchaseAddOns onClose={() => setShowPurchaseModal(false)} />
            )}
        </>
    )
}

export default ManagePlan