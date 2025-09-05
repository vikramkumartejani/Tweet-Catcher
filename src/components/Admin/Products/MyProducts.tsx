'use client'

import React, { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import AddProductModal from './AddProductModal'
import Image from 'next/image'
import { createPortal } from 'react-dom'


const MyProducts = () => {
    const [showAddModal, setShowAddModal] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 })
    const [loadingStates, setLoadingStates] = useState<{[key: string]: boolean}>({})
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Monitor Pro",
            status: "Active",
            price: "$275/month",
            totalSubscriptions: 147,
            createdAt: "12/12/24, 05:18:39",
            image: "/assets/icons/default.svg"
        },
        {
            id: 2,
            name: "Analytics Dashboard",
            status: "Active",
            price: "$150/month",
            totalSubscriptions: 89,
            createdAt: "11/15/24, 14:22:15",
            image: "/assets/icons/default.svg"
        },
        {
            id: 3,
            name: "API Access",
            status: "Inactive",
            price: "$50/month",
            totalSubscriptions: 23,
            createdAt: "10/08/24, 09:45:30",
            image: "/assets/icons/default.svg"
        },
        {
            id: 4,
            name: "Premium Support",
            status: "Active",
            price: "$99/month",
            totalSubscriptions: 156,
            createdAt: "09/22/24, 16:33:12",
            image: "/assets/icons/default.svg"
        },
        {
            id: 5,
            name: "Cloud Storage",
            status: "Draft",
            price: "$25/month",
            totalSubscriptions: 0,
            createdAt: "12/01/24, 11:20:45",
            image: "/assets/icons/default.svg"
        },
        {
            id: 6,
            name: "Enterprise Security",
            status: "Active",
            price: "$450/month",
            totalSubscriptions: 78,
            createdAt: "11/28/24, 08:15:22",
            image: "/assets/icons/default.svg"
        },
        {
            id: 7,
            name: "Mobile App Access",
            status: "Active",
            price: "$75/month",
            totalSubscriptions: 234,
            createdAt: "11/20/24, 13:42:18",
            image: "/assets/icons/default.svg"
        },
        {
            id: 8,
            name: "Advanced Reporting",
            status: "Inactive",
            price: "$120/month",
            totalSubscriptions: 45,
            createdAt: "10/15/24, 16:30:45",
            image: "/assets/icons/default.svg"
        },
        {
            id: 9,
            name: "White Label Solution",
            status: "Active",
            price: "$800/month",
            totalSubscriptions: 12,
            createdAt: "09/30/24, 10:25:33",
            image: "/assets/icons/default.svg"
        },
        {
            id: 10,
            name: "Basic Plan",
            status: "Active",
            price: "$29/month",
            totalSubscriptions: 456,
            createdAt: "09/15/24, 14:18:27",
            image: "/assets/icons/default.svg"
        },
        {
            id: 11,
            name: "Custom Integration",
            status: "Draft",
            price: "$200/month",
            totalSubscriptions: 0,
            createdAt: "12/05/24, 09:30:15",
            image: "/assets/icons/default.svg"
        },
        {
            id: 12,
            name: "Data Export Tool",
            status: "Active",
            price: "$65/month",
            totalSubscriptions: 89,
            createdAt: "11/10/24, 11:45:12",
            image: "/assets/icons/default.svg"
        },
        {
            id: 13,
            name: "Team Collaboration",
            status: "Active",
            price: "$180/month",
            totalSubscriptions: 67,
            createdAt: "10/25/24, 15:20:40",
            image: "/assets/icons/default.svg"
        },
        {
            id: 14,
            name: "Backup Service",
            status: "Inactive",
            price: "$40/month",
            totalSubscriptions: 34,
            createdAt: "10/12/24, 12:15:28",
            image: "/assets/icons/default.svg"
        },
        {
            id: 15,
            name: "Priority Support",
            status: "Active",
            price: "$300/month",
            totalSubscriptions: 23,
            createdAt: "09/05/24, 17:35:50",
            image: "/assets/icons/default.svg"
        },
        {
            id: 16,
            name: "Custom Themes",
            status: "Draft",
            price: "$85/month",
            totalSubscriptions: 0,
            createdAt: "12/08/24, 14:22:18",
            image: "/assets/icons/default.svg"
        },
        {
            id: 17,
            name: "Advanced Analytics",
            status: "Active",
            price: "$220/month",
            totalSubscriptions: 134,
            createdAt: "11/02/24, 16:40:25",
            image: "/assets/icons/default.svg"
        },
        {
            id: 18,
            name: "API Rate Limiting",
            status: "Active",
            price: "$95/month",
            totalSubscriptions: 78,
            createdAt: "10/18/24, 13:25:35",
            image: "/assets/icons/default.svg"
        },
        {
            id: 19,
            name: "Multi-tenant Support",
            status: "Inactive",
            price: "$350/month",
            totalSubscriptions: 15,
            createdAt: "09/28/24, 11:50:42",
            image: "/assets/icons/default.svg"
        },
        {
            id: 20,
            name: "Real-time Monitoring",
            status: "Active",
            price: "$160/month",
            totalSubscriptions: 201,
            createdAt: "09/12/24, 08:30:15",
            image: "/assets/icons/default.svg"
        }
    ])

    const handleDeleteProduct = async (id: number) => {
        setLoadingStates(prev => ({ ...prev, [`delete-${id}`]: true }))
        // Simulate API call
        setTimeout(() => {
        setProducts(products.filter(product => product.id !== id))
            setLoadingStates(prev => ({ ...prev, [`delete-${id}`]: false }))
        }, 1000)
    }

    const handleEditProduct = async (id: number) => {
        setLoadingStates(prev => ({ ...prev, [`edit-${id}`]: true }))
        // Simulate API call
        setTimeout(() => {
        console.log('Edit product:', id)
            setLoadingStates(prev => ({ ...prev, [`edit-${id}`]: false }))
        }, 1000)
    }

    // Close dropdown when clicking outside
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

    const getStatusBadge = (status: string) => {
        const statusColors = {
            'Active': 'bg-[#22C55E]',
            'Inactive': 'bg-[#EF4444]',
            'Draft': 'bg-[#F59E0B]'
        }
        return statusColors[status as keyof typeof statusColors] || 'bg-[#6B7280]'
    }

    return (
        <div className="w-full">
            <div className="w-full flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                    <Image src='/assets/icons/my-products.svg' alt='my-products' width={28} height={28} />
                    <h1 className="text-white text-[16px] font-semibold">My Products</h1>
                </div>

                <Button
                    onClick={() => setShowAddModal(true)}
                    className="bg-[#535EE1] hover:bg-[#4A52D9] text-white px-4 h-[33px] rounded-md text-[13px] font-medium flex items-center gap-1"
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6875 6C10.6875 6.14918 10.6282 6.29226 10.5227 6.39775C10.4173 6.50324 10.2742 6.5625 10.125 6.5625H6.5625V10.125C6.5625 10.2742 6.50324 10.4173 6.39775 10.5227C6.29226 10.6282 6.14918 10.6875 6 10.6875C5.85082 10.6875 5.70774 10.6282 5.60225 10.5227C5.49676 10.4173 5.4375 10.2742 5.4375 10.125V6.5625H1.875C1.72582 6.5625 1.58274 6.50324 1.47725 6.39775C1.37176 6.29226 1.3125 6.14918 1.3125 6C1.3125 5.85082 1.37176 5.70774 1.47725 5.60225C1.58274 5.49676 1.72582 5.4375 1.875 5.4375H5.4375V1.875C5.4375 1.72582 5.49676 1.58274 5.60225 1.47725C5.70774 1.37176 5.85082 1.3125 6 1.3125C6.14918 1.3125 6.29226 1.37176 6.39775 1.47725C6.50324 1.58274 6.5625 1.72582 6.5625 1.875V5.4375H10.125C10.2742 5.4375 10.4173 5.49676 10.5227 5.60225C10.6282 5.70774 10.6875 5.85082 10.6875 6Z" fill="white" />
                    </svg>
                    Add Product
                </Button>
            </div>

            {/* Table View */}
            <div className="w-full overflow-hidden">
                <div className="max-h-[calc(100vh-200px)] overflow-y-auto overflow-x-hidden custom-scrollbar rounded-md">
                    <table className="w-full">
                        <thead className="sticky top-0 z-10">
                            <tr className="bg-[#13151E] border-b border-[#3B3D5533]">
                                <th className="text-left px-4 py-3 text-[#515A69] text-[14px] font-medium capitalize">Name</th>
                                <th className="text-left px-4 py-3 text-[#515A69] text-[14px] font-medium capitalize">Status</th>
                                <th className="text-left px-4 py-3 text-[#515A69] text-[14px] font-medium capitalize">Price</th>
                                <th className="text-left px-4 py-3 text-[#515A69] text-[14px] font-medium capitalize">Total Subscriptions</th>
                                <th className="text-left px-4 py-3 text-[#515A69] text-[14px] font-medium capitalize">Created at</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={product.id} className={`border-b border-[#FFFFFF0D] hover:bg-[#13151E] transition-colors ${index === products.length - 1 ? 'border-b-0' : ''}`}>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-3">
                                            <Image src='/assets/icons/default.svg' alt='default' width={40} height={40} className='sm:w-10 w-8' />
                                            <span className="text-white text-[14px] sm:text-[15px] font-medium">{product.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="inline-flex items-center px-4 h-[28px] rounded-full border border-[#191E26] bg-[#0E101A]">
                                            <span className="text-white text-[11px] font-medium">{product.status}</span>
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="text-white text-[15px] font-medium">{product.price}</span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="text-white text-[15px] font-medium">{product.totalSubscriptions}</span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-white text-[15px] font-medium">{product.createdAt}</span>
                                            <div className="flex items-center gap-[25px]">
                                                <button className="bg-[#535EE1] hover:bg-[#5B5BD6] text-white px-3 h-[29px] rounded-md text-[12px] font-medium transition-colors cursor-pointer">
                                                    Share
                                                </button>
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
                                                            setActiveDropdown(activeDropdown === product.id ? null : product.id)
                                                        }}
                                                    >
                                                        <svg
                                                            // className="-mt-[7px]"
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
                                                    {activeDropdown === product.id && createPortal(
                                                        <div 
                                                            className="absolute w-[147px] bg-[#13151E] border border-[#3B3D5533] rounded-[10px] z-[9999]"
                                                            style={{
                                                                top: `${dropdownPosition.top}px`,
                                                                right: `${dropdownPosition.right}px`
                                                            }}
                                                        >
                                                            <button
                                                                onClick={() => {
                                                                    handleEditProduct(product.id)
                                                                    setActiveDropdown(null)
                                                                }}
                                                                    disabled={loadingStates[`edit-${product.id}`] || loadingStates[`delete-${product.id}`]}
                                                                    className="w-full text-left px-[15px] leading-[31px] text-[#515A69] cursor-pointer border-b border-[#3B3D5533] hover:bg-[#2C2D3A] text-[12px] font-medium transition-colors first:rounded-t last:rounded-b disabled:opacity-50 disabled:cursor-not-allowed"
                                                            >
                                                                    {loadingStates[`edit-${product.id}`] ? 'Editing...' : 'Edit Product'}
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    handleDeleteProduct(product.id)
                                                                    setActiveDropdown(null)
                                                                }}
                                                                    disabled={loadingStates[`edit-${product.id}`] || loadingStates[`delete-${product.id}`]}
                                                                    className="w-full text-left px-[15px] leading-[31px] text-[#515A69] cursor-pointer hover:bg-[#2C2D3A] text-[12px] font-medium transition-colors first:rounded-t last:rounded-b disabled:opacity-50 disabled:cursor-not-allowed"
                                                            >
                                                                    {loadingStates[`delete-${product.id}`] ? 'Deleting...' : 'Delete Product'}
                                                            </button>
                                                        </div>,
                                                        document.body
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Product Modal */}
            {showAddModal && (
                <AddProductModal onClose={() => setShowAddModal(false)} />
            )}
        </div>
    )
}

export default MyProducts