'use client'

import React, { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import Dropdown from '@/components/ui/Dropdown'
import CreateCheckoutLink from './CreateCheckoutLink'
import Image from 'next/image'
import { createPortal } from 'react-dom'

const CheckoutLinks = () => {
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 })
    const [selectedType, setSelectedType] = useState('')
    const [selectedReleaseMethod, setSelectedReleaseMethod] = useState('')
    const [loadingStates, setLoadingStates] = useState<{[key: string]: boolean}>({})
    const [checkoutLinks, setCheckoutLinks] = useState([
        {
            id: 1,
            product: "Monitor 25 Extra Tasks",
            description: "Monitor 25 Extra Tasks - Release",
            createdAt: "2 months ago",
            plan: "Free",
            activeUsers: 0,
            stock: 1
        },
        {
            id: 2,
            product: "Monitor 25 Extra Tasks",
            description: "Monitor 25 Extra Tasks - Release",
            createdAt: "2 months ago",
            plan: "Free",
            activeUsers: 0,
            stock: "Out of stock"
        },
        {
            id: 3,
            product: "Monitor 25 Extra Tasks",
            description: "Monitor 25 Extra Tasks - Release",
            createdAt: "2 months ago",
            plan: "Free",
            activeUsers: 0,
            stock: 1
        },
        {
            id: 4,
            product: "Monitor 25 Extra Tasks",
            description: "Monitor 25 Extra Tasks - Release",
            createdAt: "2 months ago",
            plan: "Free",
            activeUsers: 0,
            stock: "Out of stock"
        },
        {
            id: 5,
            product: "Monitor 25 Extra Tasks",
            description: "Monitor 25 Extra Tasks - Release",
            createdAt: "2 months ago",
            plan: "Free",
            activeUsers: 0,
            stock: "Unlimited"
        },
        {
            id: 6,
            product: "Monitor 25 Extra Tasks",
            description: "Monitor 25 Extra Tasks - Release",
            createdAt: "2 months ago",
            plan: "Free",
            activeUsers: 0,
            stock: "Unlimited"
        },
        {
            id: 7,
            product: "Monitor 25 Extra Tasks",
            description: "Monitor 25 Extra Tasks - Release",
            createdAt: "2 months ago",
            plan: "Free",
            activeUsers: 0,
            stock: 1
        },
        {
            id: 8,
            product: "Monitor 25 Extra Tasks",
            description: "Monitor 25 Extra Tasks - Release",
            createdAt: "2 months ago",
            plan: "Free",
            activeUsers: 0,
            stock: "Out of stock"
        }
    ])

    const handleDeleteLink = async (id: number) => {
        setLoadingStates(prev => ({ ...prev, [`delete-${id}`]: true }))
        // Simulate API call
        setTimeout(() => {
            setCheckoutLinks(checkoutLinks.filter(link => link.id !== id))
            setLoadingStates(prev => ({ ...prev, [`delete-${id}`]: false }))
        }, 1000)
    }

    const handleEditLink = async (id: number) => {
        setLoadingStates(prev => ({ ...prev, [`edit-${id}`]: true }))
        // Simulate API call
        setTimeout(() => {
            console.log('Edit link:', id)
            setLoadingStates(prev => ({ ...prev, [`edit-${id}`]: false }))
        }, 1000)
    }

    const typeOptions = [
        { value: 'all-types', label: 'All Types' },
        { value: 'one-time', label: 'One-time' },
        { value: 'subscription', label: 'Subscription' },
        { value: 'trial', label: 'Trial' },
        { value: 'lifetime', label: 'Lifetime' }
    ]

    const releaseMethodOptions = [
        { value: 'all-methods', label: 'All Methods' },
        { value: 'instant', label: 'Instant' },
        { value: 'manual', label: 'Manual' },
        { value: 'scheduled', label: 'Scheduled' }
    ]

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (activeDropdown !== null) {
                setActiveDropdown(null)
            }
        }

        if (activeDropdown !== null) {
            document.addEventListener('click', handleClickOutside)
        }

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [activeDropdown])

    const getStockBadge = (stock: string | number) => {
        if (stock === "Out of stock") {
            return (
                <span className="inline-flex items-center px-3 h-[33px] rounded-md bg-[#3B1219] text-[#F88F8C] text-[14px] leading-[20px] font-medium">
                    Out of stock
                </span>
            )
        } else if (stock === "Unlimited") {
            return (
                <span className="inline-flex items-center px-3 h-[33px] rounded-md bg-[#222222] text-[#B6B6B6] text-[14px] leading-[20px] font-medium">
                    Unlimited
                </span>
            )
        } else {
            return (
                <span className="text-white text-[14px] font-medium">{stock}</span>
            )
        }
    }

    return (
        <>
            <div className="w-full mb-10">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                    <div className='flex items-start sm:items-center sm:flex-row flex-col gap-4 sm:gap-[33px]'>
                        <div className="flex items-center gap-2.5">
                            <Image src='/assets/icons/checkout-links.svg' alt='checkout-links' width={25} height={18} />
                            <h1 className="text-white text-[16px] font-semibold">Checkout Links</h1>
                        </div>
                        <div className='flex items-center gap-3 sm:gap-5'>
                            <Dropdown
                                options={typeOptions}
                                value={selectedType}
                                onChange={setSelectedType}
                                label="Type"
                                showLabel={true}
                            />

                            <Dropdown
                                options={releaseMethodOptions}
                                value={selectedReleaseMethod}
                                onChange={setSelectedReleaseMethod}
                                label="Release Method"
                                showLabel={true}
                            />
                        </div>
                    </div>

                    <Button
                        onClick={() => setShowCreateModal(true)}
                        className="bg-[#535EE1] hover:bg-[#4A52D9] text-white px-4 h-[33px] rounded-md text-[13px] font-medium flex items-center gap-1"
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6875 6C10.6875 6.14918 10.6282 6.29226 10.5227 6.39775C10.4173 6.50324 10.2742 6.5625 10.125 6.5625H6.5625V10.125C6.5625 10.2742 6.50324 10.4173 6.39775 10.5227C6.29226 10.6282 6.14918 10.6875 6 10.6875C5.85082 10.6875 5.70774 10.6282 5.60225 10.5227C5.49676 10.4173 5.4375 10.2742 5.4375 10.125V6.5625H1.875C1.72582 6.5625 1.58274 6.50324 1.47725 6.39775C1.37176 6.29226 1.3125 6.14918 1.3125 6C1.3125 5.85082 1.37176 5.70774 1.47725 5.60225C1.58274 5.49676 1.72582 5.4375 1.875 5.4375H5.4375V1.875C5.4375 1.72582 5.49676 1.58274 5.60225 1.47725C5.70774 1.37176 5.85082 1.3125 6 1.3125C6.14918 1.3125 6.29226 1.37176 6.39775 1.47725C6.50324 1.58274 6.5625 1.72582 6.5625 1.875V5.4375H10.125C10.2742 5.4375 10.4173 5.49676 10.5227 5.60225C10.6282 5.70774 10.6875 5.85082 10.6875 6Z" fill="white" />
                        </svg>
                        Create checkout link
                    </Button>
                </div>

                {/* Table View */}
                <div className="overflow-hidden">
                    <div className="max-h-[calc(100vh-200px)] overflow-y-auto overflow-x-auto custom-scrollbar rounded-md">
                        <table className="w-full min-w-[970px]">
                            <thead className="sticky top-0 z-10">
                                <tr className="bg-[#13151E] border-b border-[#3B3D5533]">
                                    <th className="text-left px-4 py-3 text-[#515A69] text-[14px] font-medium capitalize">Product</th>
                                    <th className="text-left px-4 py-3 text-[#515A69] text-[14px] font-medium capitalize">Created At</th>
                                    <th className="text-left px-4 py-3 text-[#515A69] text-[14px] font-medium capitalize">Plan</th>
                                    <th className="text-left px-4 py-3 text-[#515A69] text-[14px] font-medium capitalize">Active Users</th>
                                    <th className="text-left px-4 py-3 text-[#515A69] text-[14px] font-medium capitalize">Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                            {checkoutLinks.map((link, index) => (
                                <tr key={link.id} className={`border-b border-[#FFFFFF0D] hover:bg-[#13151E] transition-colors ${index === checkoutLinks.length - 1 ? 'border-b-0' : ''}`}>
                                    <td className="px-4 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-white text-[15px] leading-[20px] font-medium">{link.product}</span>
                                            <span className="text-[#868EA2] text-[13px] leading-[20px] font-medium">{link.description}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="text-white text-[14px] leading-[20px] font-medium">{link.createdAt}</span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="text-white text-[14px] leading-[20px] font-medium">{link.plan}</span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="text-[#535EE1] text-[14px] font-medium">{link.activeUsers}</span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center justify-between gap-4">
                                            {getStockBadge(link.stock)}
                                            <div className="relative group">
                                                <button
                                                    className="cursor-pointer group w-6 h-[29px] flex items-center justify-center"
                                                    tabIndex={0}
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        const rect = e.currentTarget.getBoundingClientRect()
                                                        const tableContainer = e.currentTarget.closest('.custom-scrollbar')
                                                        const containerRect = tableContainer?.getBoundingClientRect()
                                                        const dropdownHeight = 62 // Approximate height of dropdown (2 buttons * 31px each)
                                                        const spaceBelow = containerRect ? containerRect.bottom - rect.bottom : window.innerHeight - rect.bottom
                                                        const spaceAbove = containerRect ? rect.top - containerRect.top : rect.top
                                                        
                                                        // Show above if not enough space below, but enough space above
                                                        const showAbove = spaceBelow < dropdownHeight && spaceAbove > dropdownHeight
                                                        
                                                        setDropdownPosition({
                                                            top: showAbove ? rect.top - dropdownHeight - 4 : rect.bottom + 4,
                                                            right: window.innerWidth - rect.right
                                                        })
                                                        setActiveDropdown(activeDropdown === link.id ? null : link.id)
                                                    }}
                                                >
                                                    <svg
                                                        width="22"
                                                        height="4"
                                                        viewBox="0 0 22 4"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle cx="2" cy="2" r="2" className="fill-[#272B3C] group-hover:fill-white/40" />
                                                        <circle cx="11" cy="2" r="2" className="fill-[#272B3C] group-hover:fill-white/40" />
                                                        <circle cx="20" cy="2" r="2" className="fill-[#272B3C] group-hover:fill-white/40" />
                                                    </svg>
                                                </button>

                                                {/* Dropdown Menu */}
                                                {activeDropdown === link.id && createPortal(
                                                    <div
                                                        className="absolute w-[147px] bg-[#13151E] border border-[#3B3D5533] rounded-[10px] z-[9999]"
                                                        style={{
                                                            top: `${dropdownPosition.top}px`,
                                                            right: `${dropdownPosition.right}px`
                                                        }}
                                                    >
                                                        <button
                                                            onClick={() => {
                                                                handleEditLink(link.id)
                                                                setActiveDropdown(null)
                                                            }}
                                                            disabled={loadingStates[`edit-${link.id}`] || loadingStates[`delete-${link.id}`]}
                                                            className="w-full text-left px-[15px] leading-[31px] text-[#515A69] cursor-pointer border-b border-[#3B3D5533] hover:bg-[#2C2D3A] text-[12px] font-medium transition-colors first:rounded-t last:rounded-b disabled:opacity-50 disabled:cursor-not-allowed"
                                                        >
                                                            {loadingStates[`edit-${link.id}`] ? 'Editing...' : 'Edit Link'}
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                handleDeleteLink(link.id)
                                                                setActiveDropdown(null)
                                                            }}
                                                            disabled={loadingStates[`edit-${link.id}`] || loadingStates[`delete-${link.id}`]}
                                                            className="w-full text-left px-[15px] leading-[31px] text-[#515A69] cursor-pointer hover:bg-[#2C2D3A] text-[12px] font-medium transition-colors first:rounded-t last:rounded-b disabled:opacity-50 disabled:cursor-not-allowed"
                                                        >
                                                            {loadingStates[`delete-${link.id}`] ? 'Deleting...' : 'Delete Link'}
                                                        </button>
                                                    </div>,
                                                    document.body
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Create Checkout Link Modal */}
            {showCreateModal && (
                <CreateCheckoutLink onClose={() => setShowCreateModal(false)} />
            )}
        </>
    )
}

export default CheckoutLinks