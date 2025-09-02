'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './ui/Logo';
import Image from 'next/image';
import { div } from 'framer-motion/client';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    const isAdmin = pathname.includes('/admin');
    const isUser = pathname.includes('/user');

    // Admin navigation
    const adminNavigation = [
        {
            name: 'Dashboard',
            href: '/admin',
            activeIcon: '/assets/icons/active-dashboard.svg',
            nonActiveIcon: '/assets/icons/non-active-dashboard.svg'
        },
        {
            name: 'Products',
            href: '/admin/products',
            activeIcon: '/assets/icons/active-products.svg',
            nonActiveIcon: '/assets/icons/non-active-products.svg'
        },
        {
            name: 'Links',
            href: '/admin/links',
            activeIcon: '/assets/icons/active-links.svg',
            nonActiveIcon: '/assets/icons/non-active-links.svg'
        },
        {
            name: 'Users',
            href: '/admin/users',
            activeIcon: '/assets/icons/active-users.svg',
            nonActiveIcon: '/assets/icons/non-active-users.svg'
        },
    ];

    // User navigation
    const userNavigation = [
        {
            name: 'Dashboard',
            href: '/user',
            activeIcon: '/assets/icons/active-dashboard.svg',
            nonActiveIcon: '/assets/icons/non-active-dashboard.svg'
        },
        {
            name: 'Documentation',
            href: '/user/documentation',
            activeIcon: '/assets/icons/non-active-documentation.svg',
            nonActiveIcon: '/assets/icons/non-active-documentation.svg'
        },
        {
            name: 'Support',
            href: '/user/support',
            activeIcon: '/assets/icons/non-active-support.svg',
            nonActiveIcon: '/assets/icons/non-active-support.svg'
        },
    ];

    const navigation = isAdmin ? adminNavigation : userNavigation;
    const isActive = (href: string) => pathname === href;

    const closeSidebar = () => setSidebarOpen(false);

    return (
        <>
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={closeSidebar}
                />
            )}

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-[#13151E] transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between px-4 py-5 sm:p-6 border-b border-[#FFFFFF1A]">
                        <Logo />
                        <button
                            onClick={closeSidebar}
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Sidebar Navigation */}
                    <nav className="flex-1 px-4 py-5 sm:p-6">
                        <div className="space-y-2">
                            {navigation.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={closeSidebar}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${active
                                            ? 'text-white font-medium bg-[#0E1015]'
                                            : 'text-[#6B7587] font-normal hover:text-white hover:bg-[#151721]'
                                            }`}
                                    >
                                        <img
                                            src={active ? item.activeIcon : item.nonActiveIcon}
                                            alt={`${item.name} icon`}
                                            className="w-5 h-5"
                                        />
                                        <span className="text-[15px] leading-[20px]">{item.name}</span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Additional Links for Admin */}
                        {isAdmin && (
                            <div className="mt-8 pt-6 border-t border-[#FFFFFF1A]">
                                <div className="space-y-2">
                                    <Link
                                        href="#"
                                        onClick={closeSidebar}
                                        className="flex items-center gap-3 px-4 py-3 text-[#6B7587] hover:text-white hover:bg-[#151721] rounded-lg transition-colors"
                                    >
                                        <Image src='/assets/icons/non-active-documentation.svg' alt='documentation' width={20} height={20} />
                                        <span className="text-[15px] leading-[20px] font-normal">Documentation</span>
                                    </Link>
                                    <Link
                                        href="#"
                                        onClick={closeSidebar}
                                        className="flex items-center gap-3 px-4 py-3 text-[#6B7587] hover:text-white hover:bg-[#151721] rounded-lg transition-colors"
                                    >
                                        <Image src='/assets/icons/non-active-support.svg' alt='support' width={20} height={20} />
                                        <span className="text-[15px] leading-[20px] font-normal">Support</span>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </div>

            {/* Main Header */}
            <nav className="border-b border-[#FFFFFF1A] px-4 sm:px-6 py-5 sm:py-[22px] shadow-lg">
                <div className="flex items-center justify-between max-w-[1312px] w-full mx-auto">
                    <div className="flex items-center space-x-6 xl:space-x-10">
                        <Logo />

                        <div className="hidden lg:block w-px h-[30px] bg-[#FFFFFF1A]"></div>

                        <div className="hidden lg:flex items-center gap-4 xl:gap-5">
                            {navigation.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`flex items-center gap-1.5 justify-center px-2.5 pr-3.5 h-[33px] rounded-lg transition-colors ${active
                                            ? 'text-white font-medium relative'
                                            : 'text-[#6B7587] font-normal'
                                            }`}
                                        style={active ? {
                                            background: 'radial-gradient(76.36% 76.36% at 42.27% 50%, #151721 0%, #1B2939 100%)',
                                            backgroundClip: 'padding-box',
                                            position: 'relative'
                                        } : {}}
                                    >
                                        {active && (
                                            <div
                                                className="absolute inset-0 rounded-lg -z-10"
                                                style={{
                                                    background: 'linear-gradient(159.44deg, #6D6F9C 16.53%, #262636 79.77%)',
                                                    margin: '-1px'
                                                }}
                                            />
                                        )}
                                        <img
                                            src={active ? item.activeIcon : item.nonActiveIcon}
                                            alt={`${item.name} icon`}
                                            className="w-5 h-5"
                                        />
                                        <span className="text-[15px] leading-[20px]">{item.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-6 xl:gap-8">
                        {/* Desktop Navigation - Hidden on mobile */}
                        {isAdmin && (
                            <div className='flex items-center gap-6 xl:gap-8'>
                                <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-[#6B7587]">
                                    <Link href="#" className="flex items-center gap-2">
                                        <Image src='/assets/icons/non-active-documentation.svg' alt='documentation' width={20} height={20} />
                                        <span className="text-[15px] leading-[20px] font-normal">Documentation</span>
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2">
                                        <Image src='/assets/icons/non-active-support.svg' alt='support' width={20} height={20} />
                                        <span className="text-[15px] leading-[20px] font-normal">Support</span>
                                    </Link>
                                </div>

                                <div className="w-9 h-9 bg-[#1B2939] rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden text-white hover:text-gray-300 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;