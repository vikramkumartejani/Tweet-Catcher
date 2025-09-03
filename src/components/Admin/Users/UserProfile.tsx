'use client'

import React from 'react'
import DashboardLayout from '@/components/DasbhboardLayout'
import { useRouter } from 'next/navigation'

interface UserProfileProps {
    username: string
}

const UserProfile: React.FC<UserProfileProps> = ({ username }) => {
    const router = useRouter()

    // Sample user data - in real app, this would come from API
    const usersData = [
        {
            username: "john-doe",
            name: "John Doe",
            email: "johndoe@email.com"
        },
        {
            username: "jane-smith",
            name: "Jane Smith",
            email: "janesmith@email.com"
        },
        {
            username: "mike-johnson",
            name: "Mike Johnson",
            email: "mikej@email.com"
        },
        {
            username: "sarah-wilson",
            name: "Sarah Wilson",
            email: "sarahw@email.com"
        },
        {
            username: "alex-brown",
            name: "Alex Brown",
            email: "alexb@email.com"
        },
        {
            username: "emma-davis",
            name: "Emma Davis",
            email: "emmad@email.com"
        },
        {
            username: "tom-wilson",
            name: "Tom Wilson",
            email: "tomw@email.com"
        },
        {
            username: "lisa-garcia",
            name: "Lisa Garcia",
            email: "lisag@email.com"
        }
    ]

    // Find user data based on username
    const userData = usersData.find(user => user.username === username) || {
        username: username,
        name: "User Not Found",
        email: "user@notfound.com"
    }

    const handleBackClick = () => {
        router.back()
    }

    return (
        <DashboardLayout>
            <div className='max-w-[1312px] w-full mx-auto text-white'>
                {/* Header */}
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
            </div>
        </DashboardLayout>
    )
}

export default UserProfile
