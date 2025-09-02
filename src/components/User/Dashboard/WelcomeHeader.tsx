'use client';

import InputField from '@/components/ui/InputField';
import React, { useState, useEffect } from 'react';

const WelcomeHeader = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progressWidth, setProgressWidth] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const memberships = [
        {
            id: 1,
            title: "Tweet Catcher Cloud Monitor",
            description: "This is the catcher cloud monitor plan",
            icon: "🔑"
        },
        {
            id: 2,
            title: "Account Automation Tool",
            description: "This is the catcher cloud monitor plan",
            icon: "🔑"
        },
        {
            id: 3,
            title: "Premium Analytics Suite",
            description: "Advanced analytics and reporting tools",
            icon: "📊"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % memberships.length);
        setProgressWidth(0);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + memberships.length) % memberships.length);
        setProgressWidth(0);
    };

    useEffect(() => {
        setProgressWidth(0);

        const progressInterval = setInterval(() => {
            setProgressWidth((prev) => {
                if (prev >= 100) {
                    return 0;
                }
                return prev + 2;
            });
        }, 100);

        return () => clearInterval(progressInterval);
    }, [currentSlide]);

    // Check for mobile screen size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const autoAdvanceInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % memberships.length);
        }, 5000);

        return () => clearInterval(autoAdvanceInterval);
    }, [memberships.length]);

    return (
        <div className='border border-[#3B3D5533] rounded-[10px] px-4 sm:px-6 xl:px-9 py-[22px]'
            style={{ background: "linear-gradient(90deg, #13151E 0%, #0F1218 100%)" }}>

            <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 w-full justify-between">
                {/* Left Section - User Information */}
                <div className="lg:max-w-[640px] w-full flex items-center flex-wrap justify-between gap-4 xl:gap-6">
                    <div className='flex flex-col'>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-blue-400 flex items-center justify-center">
                            <span className="text-white text-[14px] font-bold">J</span>
                        </div>
                        <h1 className="text-[16px] sm:text-[18px] font-medium text-white mt-3">Welcome back, John</h1>
                        <p className="text-[#515A69] font-medium text-[14px] mt-1.5">Manage your licenses and account here 24/7</p>
                    </div>

                    <InputField
                        label="Connected Email"
                        defaultValue="email@address.com"
                        readOnly
                        required
                        className='w-full sm:w-[283px]'
                    />
                </div>

                {/* Right Section - My Memberships */}
                <div className="flex-1 max-w-[532px] w-full">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-[14px] font-medium leading-[22px] text-[#515A69]">
                            My Memberships ({memberships.length})
                        </h2>

                        <div className="flex gap-[11px]">
                            <button
                                onClick={prevSlide}
                                className="w-6 h-6 rounded bg-[#191C27] flex items-center justify-center cursor-pointer"
                            >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.89787 9.35205C8.00354 9.45772 8.0629 9.60104 8.0629 9.75049C8.0629 9.89993 8.00354 10.0433 7.89787 10.1489C7.79219 10.2546 7.64887 10.314 7.49943 10.314C7.34998 10.314 7.20666 10.2546 7.10099 10.1489L3.35099 6.39892C3.29855 6.34667 3.25694 6.28457 3.22855 6.2162C3.20016 6.14782 3.18555 6.07452 3.18555 6.00049C3.18555 5.92645 3.20016 5.85315 3.22855 5.78478C3.25694 5.7164 3.29855 5.65431 3.35099 5.60205L7.10099 1.85205C7.20666 1.74638 7.34998 1.68701 7.49943 1.68701C7.64887 1.68701 7.79219 1.74638 7.89787 1.85205C8.00354 1.95772 8.0629 2.10104 8.0629 2.25049C8.0629 2.39993 8.00354 2.54325 7.89787 2.64892L4.54677 6.00002L7.89787 9.35205Z" fill="white" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-6 h-6 rounded bg-[#191C27] flex items-center justify-center cursor-pointer"
                            >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.10213 2.64795C3.99646 2.54228 3.9371 2.39896 3.9371 2.24951C3.9371 2.10007 3.99646 1.95675 4.10213 1.85108C4.20781 1.7454 4.35113 1.68604 4.50057 1.68604C4.65002 1.68604 4.79334 1.7454 4.89901 1.85108L8.64901 5.60108C8.70145 5.65333 8.74306 5.71543 8.77145 5.7838C8.79984 5.85218 8.81445 5.92548 8.81445 5.99951C8.81445 6.07355 8.79984 6.14685 8.77145 6.21522C8.74306 6.2836 8.70145 6.34569 8.64901 6.39795L4.89901 10.148C4.79334 10.2536 4.65002 10.313 4.50057 10.313C4.35113 10.313 4.20781 10.2536 4.10213 10.1479C3.99646 10.0423 3.9371 9.89896 3.9371 9.74951C3.9371 9.60007 3.99646 9.45675 4.10213 9.35108L7.45323 5.99998L4.10213 2.64795Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Membership Cards Carousel */}
                    <div
                        className="relative overflow-hidden w-full"
                        style={{
                            width: isMobile ? '100%' : `${2 * 256 + 20}px`,
                            maxWidth: isMobile ? '100%' : 'none'
                        }}
                    >
                        <div
                            className={`flex transition-transform duration-500 ease-in-out ${isMobile ? 'gap-0' : 'gap-3 sm:gap-5'}`}
                            style={{
                                transform: isMobile ? `translateX(-${currentSlide * 100}%)` : `translateX(-${currentSlide * (256 + 20)}px)`
                            }}
                        >
                            {[...memberships, ...memberships].map((membership, index) => {
                                const originalIndex = index % memberships.length;
                                return (
                                    <div key={`${membership.id}-${index}`} className={`${isMobile ? 'w-full' : 'w-[256px]'} flex-shrink-0 bg-[#191C27] rounded-t-md px-4 pb-[22px] pt-3 relative`}>
                                        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#34394D] rounded-b-md"></div>
                                        {originalIndex === currentSlide && (
                                            <div className="absolute bottom-0 left-0 h-[3px] rounded-b-md transition-all duration-100 ease-linear z-10"
                                                style={{
                                                    width: `${progressWidth}%`,
                                                    background: 'linear-gradient(90deg, #535EE1 0%, #7080FF 100%)'
                                                }}>
                                            </div>
                                        )}

                                        {/* Card Header */}
                                        <div className="flex items-start justify-between mb-1">
                                            <h3 className={`text-[12.5px] leading-[20px] font-medium ${originalIndex === currentSlide ? 'text-white' : 'text-[#515A69]'}`}>
                                                {membership.title}
                                            </h3>
                                            <span className={`${originalIndex === currentSlide ? 'text-[#7881F6]' : 'text-[#34394D]'}`}>
                                                {originalIndex === currentSlide ? (
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.75437 8.45912L3.16675 15.0417L4.75008 16.625M5.54175 12.6667L7.12508 14.25M15.8334 5.9375C15.8334 7.90501 14.2384 9.5 12.2709 9.5C10.3034 9.5 8.70841 7.90501 8.70841 5.9375C8.70841 3.96999 10.3034 2.375 12.2709 2.375C14.2384 2.375 15.8334 3.96999 15.8334 5.9375Z" stroke="#7881F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                ) : (
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.75437 8.45912L3.16675 15.0417L4.75008 16.625M5.54175 12.6667L7.12508 14.25M15.8334 5.9375C15.8334 7.90501 14.2384 9.5 12.2709 9.5C10.3034 9.5 8.70841 7.90501 8.70841 5.9375C8.70841 3.96999 10.3034 2.375 12.2709 2.375C14.2384 2.375 15.8334 3.96999 15.8334 5.9375Z" stroke="#34394D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                )}
                                            </span>
                                        </div>

                                        <p className="text-[#515A69] text-[11px] leading-[16px] font-medium">{membership.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeHeader;