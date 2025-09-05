'use client'

import React, { useState } from 'react'
import DashboardLayout from '@/components/DasbhboardLayout'
import { useRouter } from 'next/navigation'
import usersData from './users.json'
import Image from 'next/image'
import { div, span } from 'framer-motion/client'

interface UserProfileProps {
    username: string
}

interface FAQSectionProps {
    title: string
    isOpen: boolean
    onToggle: () => void
    children: React.ReactNode
    type?: 'left' | 'right'
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, isOpen, onToggle, children, type = 'left' }) => {
    return (
        <div className="w-full">
            <button
                onClick={onToggle}
                className="w-full flex items-center gap-2.5 text-left h-[44px] cursor-pointer bg-[#13151E] border border-[#3B3D5533] rounded-md px-5"
            >
                <svg className={`transition-transform ${isOpen ? '' : 'rotate-180'}`} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.00627 7.69375L6.06877 3.63125C6.12538 3.57444 6.19265 3.52936 6.26672 3.49861C6.34079 3.46785 6.42021 3.45202 6.50041 3.45202C6.58061 3.45202 6.66002 3.46785 6.73409 3.49861C6.80817 3.52936 6.87544 3.57444 6.93205 3.63125L10.9945 7.69375C11.109 7.80823 11.1733 7.96349 11.1733 8.12539C11.1733 8.28728 11.109 8.44255 10.9945 8.55703C10.8801 8.67151 10.7248 8.73582 10.5629 8.73582C10.401 8.73582 10.2457 8.67151 10.1313 8.55703L6.4999 4.92566L2.86853 8.55754C2.75406 8.67201 2.59879 8.73633 2.43689 8.73633C2.275 8.73633 2.11973 8.67201 2.00525 8.55754C1.89077 8.44306 1.82646 8.28779 1.82646 8.1259C1.82646 7.964 1.89077 7.80873 2.00525 7.69426L2.00627 7.69375Z" fill="white" />
                </svg>
                <h3 className="text-[#515A69] text-[15px] font-medium">{title}</h3>
            </button>
            {isOpen && (
                <div className="w-full mt-[15px]">
                    {children}
                </div>
            )}
        </div>
    )
}

const UserProfile: React.FC<UserProfileProps> = ({ username }) => {
    const router = useRouter()
    const [openSections, setOpenSections] = useState({
        overview: true,
        contact: true,
        location: false,
        moreInfo: true,
        activeProducts: true,
        churnedProducts: false,
        payments: true
    })

    const userData = usersData.find(user => user.username === username) || {
        username: username,
        name: "User Not Found",
        email: "user@notfound.com",
        spent: "$0.00",
        joined: "Unknown",
        mrr: "0 ETH",
        discord: [],
        location: {
            country: "Unknown",
            state: "Unknown",
            city: "Unknown",
            timezone: "Unknown",
            ip: "Unknown"
        },
        userNumber: "#00000",
        userId: "user_not_found",
        trafficSource: "Unknown",
        activeProducts: [],
        churnedProducts: [],
        payments: []
    }

    const handleBackClick = () => {
        router.back()
    }

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }))
    }

    return (
        <DashboardLayout>
            <div className='my-4 sm:my-6'>
                <div className='max-w-[1312px] w-full mx-auto text-white overflow-hidden'>
                    <div className="flex items-center gap-2 mb-8">
                        <button
                            onClick={handleBackClick}
                            className="p-2 hover:bg-[#212430] rounded-md transition-colors"
                        >
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.2448 16.0675L5.30728 10.13C5.22425 10.0472 5.15837 9.9489 5.11342 9.84065C5.06847 9.73239 5.04533 9.61632 5.04533 9.4991C5.04533 9.38188 5.06847 9.26582 5.11342 9.15756C5.15837 9.0493 5.22425 8.95099 5.30728 8.86824L11.2448 2.93074C11.4121 2.76343 11.639 2.66943 11.8756 2.66943C12.1123 2.66943 12.3392 2.76343 12.5065 2.93074C12.6738 3.09806 12.7678 3.32499 12.7678 3.5616C12.7678 3.79822 12.6738 4.02515 12.5065 4.19246L7.19912 9.49985L12.5072 14.8072C12.6746 14.9745 12.7686 15.2015 12.7686 15.4381C12.7686 15.6747 12.6746 15.9016 12.5072 16.0689C12.3399 16.2363 12.113 16.3303 11.8764 16.3303C11.6398 16.3303 11.4128 16.2363 11.2455 16.0689L11.2448 16.0675Z" fill="white" />
                            </svg>
                        </button>

                        <div className='flex items-center gap-5'>
                            <div className="w-10 h-10 rounded-full bg-[#515A69] flex items-center justify-center">
                                <span className="text-white text-[14px] font-medium">
                                    {userData.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>

                            <div>
                                <h1 className="text-white text-[15px] font-medium mb-0.5">{userData.name}</h1>
                                <p className="text-[#868EA2] text-[13px] font-medium">{userData.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex lg:flex-row items-start justify-between flex-col gap-5 md:gap-8 w-full overflow-hidden lg:overflow-hidden overflow-x-auto">
                        {/* Left Column */}
                        <div className="space-y-5 md:space-y-8 lg:space-y-11 w-full lg:w-[503px]">
                            <div className="w-full lg:max-w-[503px]">
                                <FAQSection
                                    title="Overview"
                                    isOpen={openSections.overview}
                                    onToggle={() => toggleSection('overview')}
                                    type="left"
                                >
                                    <div className="w-full flex items-start justify-between gap-3 px-5">
                                        <div className="flex justify-between flex-col gap-1.5">
                                            <h3 className="text-[#575F74] text-[15px] font-medium">Spent</h3>
                                            <h3 className="text-white text-[15px] font-medium">{userData.spent}</h3>
                                        </div>
                                        <div className="flex justify-between flex-col gap-1.5">
                                            <h3 className="text-[#575F74] text-[15px] font-medium">Joined</h3>
                                            <h3 className="text-white text-[14px] font-medium">{userData.joined}</h3>
                                        </div>
                                        <div className="flex justify-between flex-col gap-1.5">
                                            <h3 className="text-[#575F74] text-[15px] font-medium">MRR</h3>
                                            <h3 className="text-white text-[14px] font-medium">{userData.mrr}</h3>
                                        </div>
                                    </div>
                                </FAQSection>
                            </div>

                            {/* Contact FAQ Section */}
                            <div className="w-full lg:max-w-[503px]">
                                <FAQSection
                                    title="Contact"
                                    isOpen={openSections.contact}
                                    onToggle={() => toggleSection('contact')}
                                    type="left"
                                >
                                    <div className="px-5">
                                        <div className='flex items-center gap-5'>
                                            <Image src='/assets/icons/email.svg' alt='email' width={20} height={20} />
                                            <span className="text-white text-[15px] font-medium">{userData.email}</span>
                                        </div>
                                        <div className='mt-4.5 flex items-start gap-4.5'>
                                            <div className="space-y-3">
                                                {userData.discord.length > 0 ? (
                                                    userData.discord.map((discord, index) => (
                                                        <div key={index} className='flex items-center gap-4 -ml-1'>
                                                            <Image src='/assets/icons/discord.svg' alt='email' width={26} height={26} />
                                                            <span className="text-white text-[15px] font-medium block">{discord}</span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <span className="text-[#868EA2] text-[15px]">No Discord accounts linked</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </FAQSection>
                            </div>

                            {/* Location FAQ Section */}
                            <div className="w-full lg:max-w-[503px]">
                                <FAQSection
                                    title="Location"
                                    isOpen={openSections.location}
                                    onToggle={() => toggleSection('location')}
                                    type="left"
                                >
                                    <div className="space-y-3.5 px-5">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#575F74] text-[15px] font-medium">Country</span>
                                            <span className="text-white text-[15px] font-medium">{userData.location.country}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#575F74] text-[15px] font-medium">State</span>
                                            <span className="text-white text-[15px] font-medium">{userData.location.state}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#575F74] text-[15px] font-medium">City</span>
                                            <span className="text-white text-[15px] font-medium">{userData.location.city}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#575F74] text-[15px] font-medium">Timezone</span>
                                            <span className="text-white text-[15px] font-medium">{userData.location.timezone}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#575F74] text-[15px] font-medium">IP Address</span>
                                            <span className="text-white text-[15px] font-medium">{userData.location.ip}</span>
                                        </div>
                                    </div>
                                </FAQSection>
                            </div>

                            {/* More Info FAQ Section */}
                            <div className="w-full lg:max-w-[503px]">
                                <FAQSection
                                    title="More Info"
                                    isOpen={openSections.moreInfo}
                                    onToggle={() => toggleSection('moreInfo')}
                                    type="left"
                                >
                                    <div className="w-full px-5 space-y-4">
                                        <div className='w-full flex items-center justify-between gap-3'>
                                            <span className="text-[#575F74] text-[15px] font-medium block mb-1">User Whop number</span>
                                            <span className="text-white text-[15px] font-medium">{userData.userNumber}</span>
                                        </div>
                                        <div className='w-full flex items-center justify-between gap-3'>
                                            <span className="text-[#575F74] text-[15px] font-medium block mb-1">User ID</span>
                                            <span className="text-white text-[15px] font-medium">{userData.userId}</span>
                                        </div>
                                        <div className='w-full flex items-start justify-between gap-3'>
                                            <span className="text-[#575F74] text-[15px] font-medium block mb-1">Traffic Source</span>
                                            <span className="text-white text-[15px] font-medium break-all max-w-[280px]">{userData.trafficSource}</span>
                                        </div>
                                    </div>
                                </FAQSection>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-5 md:space-y-8 lg:space-y-11 lg:w-[764px] w-full overflow-hidden lg:overflow-hidden overflow-x-auto">
                            {/* Active Products FAQ Section */}
                            <div className="w-full lg:max-w-[764px]">
                                <FAQSection
                                    title="Active Products"
                                    isOpen={openSections.activeProducts}
                                    onToggle={() => toggleSection('activeProducts')}
                                    type="right"
                                >
                                    <div className="overflow-x-auto border border-[#3B3D5533] bg-[#13151E] rounded-md w-full">
                                        {userData.activeProducts.length > 0 ? (
                                            <table className="w-full min-w-[500px] text-nowrap">
                                                <thead>
                                                    <tr className="border-b border-[#FFFFFF0D] h-12">
                                                        <th className="text-left text-[#515A69] text-[13px] font-medium px-5">Product</th>
                                                        <th className="text-left text-[#515A69] text-[13px] font-medium px-5">Plan</th>
                                                        <th className="text-left text-[#515A69] text-[13px] font-medium px-5">Discount</th>
                                                        <th className="text-left text-[#515A69] text-[13px] font-medium px-5">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {userData.activeProducts.map((product, index) => (
                                                        <tr key={index} className="border-b border-[#FFFFFF0D] h-11">
                                                            <td className="text-white text-[13px] font-medium px-5">{product.product}</td>
                                                            <td className="text-white text-[13px] font-medium px-5">{product.plan}</td>
                                                            <td className="text-white text-[13px] font-medium px-5">{product.discount || <span className='text-[#575F74]'>--</span>}</td>
                                                            <td className="text-[13px] font-medium px-5">
                                                                <div className={`px-3 flex items-center w-fit h-[26px] rounded-md text-[13px] font-medium ${product.statusType === 'warning'
                                                                    ? 'bg-[#31200F] text-[#F9C515]'
                                                                    : 'bg-green-500/20 text-green-400'
                                                                    }`}>
                                                                    {product.status}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        ) : (
                                            <div className="text-center py-8">
                                                <span className="text-[#868EA2] text-[14px]">No active products</span>
                                            </div>
                                        )}
                                    </div>
                                </FAQSection>
                            </div>

                            {/* Churned Products FAQ Section */}
                            <div className="w-full lg:max-w-[764px]">
                                <FAQSection
                                    title="Churned Products"
                                    isOpen={openSections.churnedProducts}
                                    onToggle={() => toggleSection('churnedProducts')}
                                    type="right"
                                >
                                    <div className="space-y-2">
                                        {userData.churnedProducts.length > 0 ? (
                                            userData.churnedProducts.map((product, index) => (
                                                <div key={index} className="border border-[#3B3D5533] bg-[#13151E] rounded-md py-4 px-5">
                                                    <div className="flex justify-between items-start mb-2.5">
                                                        <div className='flex items-center gap-2.5'>
                                                            <h4 className="text-[#515A69] text-[14px] font-medium">{product.product}</h4>
                                                            <p className="text-[#515A69] text-[14px]">({product.plan})</p>
                                                        </div>
                                                        <div className={`px-3 h-[26px] flex items-center rounded-md text-[13px] font-medium ${product.status === 'Cancelled'
                                                            ? 'bg-red-500/20 text-red-400'
                                                            : 'bg-gray-500/20 text-gray-400'
                                                            }`}>
                                                            {product.status}
                                                        </div>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div className="flex justify-between">
                                                            <span className="text-[#515A69] text-[14px] font-medium">Cancelled:</span>
                                                            <span className="text-white text-[13px]">{product.cancelledDate}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-[#515A69] text-[14px] font-medium">Reason:</span>
                                                            <span className="text-white text-[13px]">{product.reason}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-center py-8">
                                                <span className="text-[#868EA2] text-[14px]">No churned products</span>
                                            </div>
                                        )}
                                    </div>
                                </FAQSection>
                            </div>

                            {/* Payments FAQ Section */}
                            <div className="w-full lg:max-w-[764px] overflow-hidden lg:overflow-hidden overflow-x-auto">
                                <FAQSection
                                    title="Payments"
                                    isOpen={openSections.payments}
                                    onToggle={() => toggleSection('payments')}
                                    type="right"
                                >
                                    <div className="overflow-x-auto bg-[#13151E] border border-[#3B3D5533] rounded-md w-full">
                                        {userData.payments.length > 0 ? (
                                            <table className="w-full min-w-[660px]">
                                                <thead>
                                                    <tr className="border-b border-[#FFFFFF1A] h-11">
                                                        <th className="text-left text-[#515A69] text-[13px] font-medium whitespace-nowrap px-3 w-[65px]">Amount</th>
                                                        <th className="text-left text-[#515A69] text-[13px] font-medium whitespace-nowrap px-3 w-[105px]">Product</th>
                                                        <th className="text-left text-[#515A69] text-[13px] font-medium whitespace-nowrap px-3 w-[65px]">Plan</th>
                                                        <th className="text-left text-[#515A69] text-[13px] font-medium whitespace-nowrap px-3 w-[55px]">Status</th>
                                                        <th className="text-left text-[#515A69] text-[13px] font-medium whitespace-nowrap px-3 w-[105px]">Billing Reason</th>
                                                        <th className="text-left text-[#515A69] text-[13px] font-medium whitespace-nowrap px-3 w-[85px]">Method</th>
                                                        <th className="text-left text-[#515A69] text-[13px] font-medium whitespace-nowrap px-3 w-[85px]">Paid</th>
                                                        <th className="text-left text-[#515A69] text-[13px] font-medium whitespace-nowrap px-3 w-[95px]">Created</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {userData.payments.map((payment, index) => (
                                                        <tr key={index} className="border-b border-[#FFFFFF1A] h-10">
                                                            <td className="text-white text-[11px] font-medium whitespace-nowrap px-3 w-[65px]">{payment.amount}</td>
                                                            <td className="text-white text-[11px] font-medium whitespace-nowrap px-3 w-[105px]">{payment.product}</td>
                                                            <td className="text-white text-[11px] font-medium whitespace-nowrap px-3 w-[65px]">{payment.plan}</td>
                                                            <td className="whitespace-nowrap px-3 w-[55px]">
                                                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.5" d="M15.5832 8.49984C15.5832 12.4118 12.4118 15.5832 8.49984 15.5832C4.58782 15.5832 1.4165 12.4118 1.4165 8.49984C1.4165 4.58782 4.58782 1.4165 8.49984 1.4165C12.4118 1.4165 15.5832 4.58782 15.5832 8.49984Z" fill="#32F086" />
                                                                    <path d="M11.355 6.35335C11.5624 6.56082 11.5624 6.89719 11.355 7.10463L7.81329 10.6463C7.60582 10.8538 7.2695 10.8538 7.06201 10.6463L5.64534 9.22963C5.43788 9.02216 5.43788 8.68584 5.64534 8.47837C5.85281 8.2709 6.18918 8.2709 6.39664 8.47837L7.43766 9.51934L9.02064 7.93636L10.6037 6.35335C10.8112 6.14589 11.1475 6.14589 11.355 6.35335Z" fill="#32F086" />
                                                                </svg>
                                                            </td>
                                                            <td className="text-white text-[11px] font-medium whitespace-nowrap px-3 w-[105px]">{payment.billingReason}</td>
                                                            <td className="text-white text-[11px] font-medium whitespace-nowrap px-3 w-[85px]">{payment.method}</td>
                                                            <td className="text-white text-[11px] font-medium whitespace-nowrap px-3 w-[85px]">{payment.paid}</td>
                                                            <td className="text-white text-[11px] font-medium whitespace-nowrap px-3 w-[95px]">{payment.created}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        ) : (
                                            <div className="text-center py-8">
                                                <span className="text-[#868EA2] text-[14px]">No payment history</span>
                                            </div>
                                        )}
                                    </div>
                                </FAQSection>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default UserProfile
