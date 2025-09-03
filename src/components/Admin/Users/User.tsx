'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import DashboardLayout from '@/components/DasbhboardLayout'
import Dropdown from '@/components/ui/Dropdown'
import Image from 'next/image'
import Link from 'next/link'

const Users = () => {
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 })
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedDateJoined, setSelectedDateJoined] = useState('')
    const [selectedProduct, setSelectedProduct] = useState('')

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "John Doe",
            username: "john-doe",
            email: "johndoe@email.com",
            discord: "johndoe_gamer",
            totalSpend: "$485.00",
            status: "Renews in 14 Days",
            statusType: "renewal",
            joined: "21 Days ago"
        },
        {
            id: 2,
            name: "Jane Smith",
            username: "jane-smith",
            email: "janesmith@email.com",
            discord: "jane_smith_art",
            totalSpend: "$320.00",
            status: "Renews in 8 Days",
            statusType: "renewal",
            joined: "15 Days ago"
        },
        {
            id: 3,
            name: "Mike Johnson",
            username: "mike-johnson",
            email: "mikej@email.com",
            discord: "mikej_dev",
            totalSpend: "$750.00",
            status: "Renews in 23 Days",
            statusType: "renewal",
            joined: "45 Days ago"
        },
        {
            id: 4,
            name: "Sarah Wilson",
            username: "sarah-wilson",
            email: "sarahw@email.com",
            discord: "sarah_wilson_2024",
            totalSpend: "$150.00",
            status: "Renews in 3 Days",
            statusType: "renewal",
            joined: "7 Days ago"
        },
        {
            id: 5,
            name: "Alex Brown",
            username: "alex-brown",
            email: "alexb@email.com",
            discord: "alex_brown_creative",
            totalSpend: "$200.00",
            status: "Renews in 29 Days",
            statusType: "renewal",
            joined: "1 Day ago"
        },
        {
            id: 6,
            name: "Emma Davis",
            username: "emma-davis",
            email: "emmad@email.com",
            discord: "emma_davis_design",
            totalSpend: "$400.00",
            status: "Renews in 12 Days",
            statusType: "renewal",
            joined: "3 Days ago"
        },
        {
            id: 7,
            name: "Tom Wilson",
            username: "tom-wilson",
            email: "tomw@email.com",
            discord: "tom_wilson_tech",
            totalSpend: "$600.00",
            status: "Renews in 5 Days",
            statusType: "renewal",
            joined: "75 Days ago"
        },
        {
            id: 8,
            name: "Lisa Garcia",
            username: "lisa-garcia",
            email: "lisag@email.com",
            discord: "lisa_garcia_music",
            totalSpend: "$300.00",
            status: "Renews in 18 Days",
            statusType: "renewal",
            joined: "120 Days ago"
        }
    ])

    const dateJoinedOptions = [
        { value: 'all', label: 'All Dates' },
        { value: 'today', label: 'Today' },
        { value: 'week', label: 'This Week' },
        { value: 'month', label: 'This Month' },
        { value: 'year', label: 'This Year' }
    ]

    const productOptions = [
        { value: 'all', label: 'All Products' },
        { value: 'monitor-pro', label: 'Monitor Pro' },
        { value: 'analytics', label: 'Analytics Dashboard' },
        { value: 'api-access', label: 'API Access' },
        { value: 'premium-support', label: 'Premium Support' }
    ]

    const handleDeleteUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id))
    }

    const handleCancelUser = (id: number) => {
        console.log('Cancel user:', id)
    }

    const handleRefundUser = (id: number) => {
        console.log('Refund user:', id)
    }

    const handleExportUsers = () => {
        // Prepare CSV data
        const csvHeaders = ['Name', 'Email', 'Total Spend', 'Status', 'Joined']
        const csvData = filteredUsers.map(user => [
            user.name,
            user.email,
            user.totalSpend,
            user.status,
            user.joined
        ])

        // Create CSV content
        const csvContent = [
            csvHeaders.join(','),
            ...csvData.map(row => row.map(field => `"${field}"`).join(','))
        ].join('\n')

        // Create and download file
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        const url = URL.createObjectURL(blob)

        link.setAttribute('href', url)
        link.setAttribute('download', `users-export-${new Date().toISOString().split('T')[0]}.csv`)
        link.style.visibility = 'hidden'

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Clean up
        URL.revokeObjectURL(url)
    }

    const getStatusBadge = (statusType: string) => {
        const statusColors = {
            'active': 'bg-[#22C55E]',
            'renewal': 'bg-[#171A41]',
            'expired': 'bg-[#EF4444]',
            'trial': 'bg-[#F59E0B]'
        }
        return statusColors[statusType as keyof typeof statusColors] || 'bg-[#6B7280]'
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

    // Helper function to check if user joined within date range
    const isWithinDateRange = (joinedText: string, dateFilter: string) => {
        if (dateFilter === '' || dateFilter === 'all') return true

        // Extract number of days from "X Days ago" format
        const daysMatch = joinedText.match(/(\d+)\s+Days?\s+ago/)
        if (!daysMatch) return false

        const daysAgo = parseInt(daysMatch[1])
        const now = new Date()

        switch (dateFilter) {
            case 'today':
                return daysAgo === 0
            case 'week':
                return daysAgo <= 7
            case 'month':
                return daysAgo <= 30
            case 'year':
                return daysAgo <= 365
            default:
                return true
        }
    }

    // Filter users based on search and filters
    const filteredUsers = users.filter(user => {
        const matchesSearch = searchTerm === '' ||
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesDate = isWithinDateRange(user.joined, selectedDateJoined)
        const matchesProduct = selectedProduct === '' || selectedProduct === 'all'

        return matchesSearch && matchesDate && matchesProduct
    })

    return (
        <DashboardLayout>
            <div className='px-4 md:px-6 lg:px-8'>
                <div className='max-w-[1312px] w-full mx-auto text-white'>
                    <div className="w-full mb-10">
                        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                            <div className='flex items-start md:items-center md:flex-row flex-col gap-4 md:gap-[28px]'>
                                <div className="flex items-center gap-2.5">
                                    <Image src='/assets/icons/active-users.svg' alt='users' width={26} height={26} />
                                    <h1 className="text-white text-[16px] font-semibold">Users</h1>
                                </div>

                                <div className="flex items-center flex-wrap gap-4 md:gap-6">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search user"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="bg-[#191C27] rounded-md px-4 max-w-[283px] h-[33px] pl-10 text-white text-[13px] placeholder:text-[#727A89] outline-none"
                                        />
                                        <svg className="absolute left-[15px] top-1/2 transform -translate-y-1/2" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8097 10.7875L13.875 13.875M12.4583 6.79167C12.4583 9.9213 9.9213 12.4583 6.79167 12.4583C3.66205 12.4583 1.125 9.9213 1.125 6.79167C1.125 3.66205 3.66205 1.125 6.79167 1.125C9.9213 1.125 12.4583 3.66205 12.4583 6.79167Z" stroke="#535EE1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>

                                    <Dropdown
                                        options={dateJoinedOptions}
                                        value={selectedDateJoined}
                                        onChange={setSelectedDateJoined}
                                        label="Date Joined"
                                        showLabel={true}
                                    />

                                    <Dropdown
                                        options={productOptions}
                                        value={selectedProduct}
                                        onChange={setSelectedProduct}
                                        label="Product"
                                        showLabel={true}
                                    />
                                </div>
                            </div>

                            {/* Export Button */}
                            <button
                                onClick={handleExportUsers}
                                className="bg-[#535EE1] hover:bg-[#4A52D9] text-white px-[26px] h-[33px] rounded-md text-[13px] font-medium flex items-center gap-[3px] transition-colors"
                            >
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.47614 7.5761C8.75683 7.85679 9.21192 7.85679 9.49261 7.5761L11.1406 5.92808V13.7762C11.1406 14.1731 11.4624 14.495 11.8594 14.495C12.2563 14.495 12.5781 14.1731 12.5781 13.7762V5.92808L14.2262 7.5761C14.5069 7.85679 14.9619 7.85679 15.2426 7.5761C15.5233 7.29542 15.5233 6.84032 15.2426 6.55964L12.3676 3.68464C12.0869 3.40395 11.6319 3.40395 11.3512 3.68464L8.47614 6.55964C8.19545 6.84032 8.19545 7.29542 8.47614 7.5761Z" fill="white" />
                                    <path d="M11.8595 19.526C16.0937 19.526 19.5262 16.0936 19.5262 11.8594H15.9325C15.0289 11.8594 14.5772 11.8594 14.2965 12.1401C14.0158 12.4208 14.0158 12.8725 14.0158 13.776C14.0158 14.9669 13.0504 15.9323 11.8595 15.9323C10.6687 15.9323 9.70329 14.9669 9.70329 13.776C9.70329 12.8725 9.70329 12.4208 9.4226 12.1401C9.14191 11.8594 8.69015 11.8594 7.78662 11.8594H4.19287C4.19287 16.0936 7.62535 19.526 11.8595 19.526Z" fill="white" />
                                </svg>
                                Export
                            </button>
                        </div>

                        {/* Table View */}
                        <div className="rounded-md overflow-x-auto overflow-y-hidden">
                            <table className="w-full min-w-[970px]">
                                <thead>
                                    <tr className="bg-[#13151E] border rounded-md border-[#3B3D5533]">
                                        <th className="text-left px-4 py-3 text-[#515A69] text-[14px] font-medium capitalize">User</th>
                                        <th className="text-left px-4 py-3 text-[#515A69] text-[14px] font-medium capitalize">Total Spend</th>
                                        <th className="text-left px-4 py-3 text-[#515A69] text-[14px] font-medium capitalize">Status</th>
                                        <th className="text-left px-4 py-3 text-[#515A69] text-[14px] font-medium capitalize">Contact</th>
                                        <th className="text-left px-4 py-3 text-[#515A69] text-[14px] font-medium capitalize">Joined</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.length > 0 ? (
                                        filteredUsers.map((user, index) => (
                                            <tr key={user.id} className={`border-b border-[#FFFFFF0D] hover:bg-[#13151E] transition-colors ${index === filteredUsers.length - 1 ? 'border-b-0' : ''}`}>
                                                <td className="px-4 py-4">
                                                    <div className="flex items-center gap-5">
                                                        <div className="w-10 h-10 rounded-full bg-[#515A69] flex items-center justify-center">
                                                            <span className="text-white text-[14px] font-medium">
                                                                {user.name.split(' ').map(n => n[0]).join('')}
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <Link 
                                                                href={`/admin/users/${user.username}`}
                                                                className="text-white text-[15px] font-medium hover:text-[#535EE1] transition-colors"
                                                            >
                                                                {user.name}
                                                            </Link>
                                                            <span className="text-[#868EA2] text-[13px] font-medium">{user.email}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <span className="text-white text-[14px] font-medium">{user.totalSpend}</span>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <span className={`inline-flex items-center px-3 h-[33px] rounded-md text-[#737DF6] w-fit text-[14px] font-medium ${getStatusBadge(user.statusType)}`}>
                                                        {user.status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <a 
                                                            href={`https://discord.com/users/${user.discord}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-6 h-6 text-[#6B7587] hover:text-white cursor-pointer transition-colors"
                                                        >
                                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 26 26">
                                                                <path d="M9.27887 18.4062L8.19554 20.5729C6.81565 19.9979 5.38673 19.423 3.86762 18.4333C3.33787 18.0882 3.01667 17.5017 3.00394 16.8695C2.93785 13.6244 3.69917 10.362 5.62682 6.91262C5.8791 6.46115 6.29944 6.13019 6.78694 5.95713C7.9499 5.54438 8.73937 5.22533 10.0914 5L10.9039 6.48958C10.9039 6.48958 11.7164 6.21875 13.0705 6.21875C14.4247 6.21875 15.2372 6.48958 15.2372 6.48958L16.0497 5C17.4017 5.22533 18.1912 5.54438 19.3541 5.95713C19.8416 6.13019 20.262 6.46115 20.5143 6.91262C22.4419 10.362 23.2032 13.6244 23.1373 16.8695C23.1244 17.5017 22.8032 18.0882 22.2735 18.4333C20.7544 19.423 19.3256 19.9979 17.9455 20.5729L16.8622 18.4062M7.65387 17.3229C7.65387 17.3229 10.3622 18.6771 13.0705 18.6771C15.7789 18.6771 18.4872 17.3229 18.4872 17.3229" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M9.61466 15.7085C10.5869 15.7085 11.3751 14.7991 11.3751 13.6772C11.3751 12.5554 10.5869 11.646 9.61466 11.646C8.64241 11.646 7.85425 12.5554 7.85425 13.6772C7.85425 14.7991 8.64241 15.7085 9.61466 15.7085Z" fill="currentColor" />
                                                                <path d="M16.3854 15.7085C17.3577 15.7085 18.1458 14.7991 18.1458 13.6772C18.1458 12.5554 17.3577 11.646 16.3854 11.646C15.4132 11.646 14.625 12.5554 14.625 13.6772C14.625 14.7991 15.4132 15.7085 16.3854 15.7085Z" fill="currentColor" />
                                                            </svg>
                                                        </a>
                                                        <a 
                                                            href={`mailto:${user.email}`}
                                                            className="w-5 h-5 text-[#6B7587] hover:text-white cursor-pointer transition-colors"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 22 17">
                                                                <path d="M2.08325 3.16705L8.79992 8.20449C9.95551 9.07116 11.5443 9.07116 12.6999 8.20449L19.4166 3.16699" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M18.3333 1H3.16667C1.97005 1 1 1.97005 1 3.16667V14C1 15.1966 1.97005 16.1667 3.16667 16.1667H18.3333C19.53 16.1667 20.5 15.1966 20.5 14V3.16667C20.5 1.97005 19.53 1 18.3333 1Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div className="flex items-center justify-between gap-4">
                                                        <span className="text-white text-[15px] font-medium">{user.joined}</span>
                                                        <div className="relative group">
                                                            <button
                                                                className="cursor-pointer group w-6 h-[29px] flex items-center justify-center"
                                                                tabIndex={0}
                                                                onClick={(e) => {
                                                                    e.stopPropagation()
                                                                    const rect = e.currentTarget.getBoundingClientRect()
                                                                    setDropdownPosition({
                                                                        top: rect.bottom + 4,
                                                                        right: window.innerWidth - rect.right
                                                                    })
                                                                    setActiveDropdown(activeDropdown === user.id ? null : user.id)
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
                                                            {activeDropdown === user.id && createPortal(
                                                                <div
                                                                    className="fixed w-[147px] bg-[#13151E] border border-[#3B3D5533] rounded-[10px] z-[9999]"
                                                                    style={{
                                                                        top: `${dropdownPosition.top}px`,
                                                                        right: `${dropdownPosition.right}px`
                                                                    }}
                                                                >
                                                                    <button
                                                                        onClick={() => {
                                                                            handleDeleteUser(user.id)
                                                                            setActiveDropdown(null)
                                                                        }}
                                                                        className="w-full text-left px-[15px] leading-[31px] text-[#515A69] cursor-pointer border-b border-[#3B3D5533] hover:bg-[#2C2D3A] text-[12px] font-medium transition-colors first:rounded-t last:rounded-b"
                                                                    >
                                                                        Delete User
                                                                    </button>
                                                                    <button
                                                                        onClick={() => {
                                                                            handleCancelUser(user.id)
                                                                            setActiveDropdown(null)
                                                                        }}
                                                                        className="w-full text-left px-[15px] leading-[31px] text-[#515A69] cursor-pointer border-b border-[#3B3D5533] hover:bg-[#2C2D3A] text-[12px] font-medium transition-colors first:rounded-t last:rounded-b"
                                                                    >
                                                                        Cancel User
                                                                    </button>
                                                                    <button
                                                                        onClick={() => {
                                                                            handleRefundUser(user.id)
                                                                            setActiveDropdown(null)
                                                                        }}
                                                                        className="w-full text-left px-[15px] leading-[31px] text-[#515A69] cursor-pointer hover:bg-[#2C2D3A] text-[12px] font-medium transition-colors first:rounded-t last:rounded-b"
                                                                    >
                                                                        Refund User
                                                                    </button>
                                                                </div>,
                                                                document.body
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={5} className="px-4 py-12 text-center">
                                                <div className="flex flex-col items-center justify-center gap-4">
                                                    <div className="text-center">
                                                        <h3 className="text-[#727A89] text-[16px] font-medium mb-2">No users found</h3>
                                                        <p className="text-[#515A69] text-[14px]">
                                                            {searchTerm || selectedDateJoined || selectedProduct
                                                                ? 'Try adjusting your search or filter criteria'
                                                                : 'No users available at the moment'
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Users
