"use client"
import React, { useState } from 'react'
import Button from '@/components/ui/Button'

interface PurchaseAddOnsProps {
    onClose: () => void
}

const SelectionButton: React.FC<{
    option: string
    selected: boolean
    onClick: () => void
}> = ({ option, selected, onClick }) => (
    <button
        onClick={onClick}
        className={`flex-1 h-[37px] px-3 sm:px-4 rounded-md cursor-pointer text-[14px] sm:text-[15px] font-medium border transition-colors bg-[#212430] ${selected
            ? 'text-white border-[#7080FF]'
            : 'text-[#727A89] border-transparent hover:border-[#7080FF] hover:text-white'
            }`}
    >
        {option}
    </button>
)

const PurchaseAddOns: React.FC<PurchaseAddOnsProps> = ({ onClose }) => {
    const [selectedTask, setSelectedTask] = useState('25 Tasks')
    const [selectedMonth, setSelectedMonth] = useState('3 Month')
    const [isLoading, setIsLoading] = useState(false)

    const taskOptions = ['25 Tasks', '50 Tasks', '75 Tasks']
    const monthOptions = ['1 Month', '3 Month', '6 month']

    const getPriceForSelection = () => {
        const taskPrices = {
            '25 Tasks': { 1: 15, 3: 40, 6: 75 },
            '50 Tasks': { 1: 25, 3: 65, 6: 120 },
            '75 Tasks': { 1: 35, 3: 90, 6: 165 }
        }

        const monthNumber = selectedMonth === '1 Month' ? 1 : selectedMonth === '3 Month' ? 3 : 6
        return taskPrices[selectedTask as keyof typeof taskPrices][monthNumber as keyof typeof taskPrices['25 Tasks']]
    }

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            className='fixed inset-0 bg-[#13151EB2] flex items-center justify-center z-50'
            onClick={handleOverlayClick}
        >
            <div className='bg-[#191C27] rounded-[15px] w-full max-w-[689px] mx-3 px-4 py-6 sm:p-10 relative'>
                <button onClick={onClose} className='text-[#474D61] hover:text-white transition-colors cursor-pointer absolute top-[25px] right-9'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                    </svg>
                </button>

                <div className='mb-8'>
                    <h2 className='text-white text-[17px] font-semibold'>Purchase Add-ons</h2>
                    <p className='text-[#515A69] text-[15px] font-medium mt-1.5'>Purchase your add-ons here</p>
                </div>

                {/* Task Amount Selection */}
                <div className='mb-8'>
                    <h3 className='text-white text-[15px] font-medium mb-3.5'>Task Amount</h3>
                    <div className='flex gap-3 sm:gap-5'>
                        {taskOptions.map((task) => (
                            <SelectionButton
                                key={task}
                                option={task}
                                selected={selectedTask === task}
                                onClick={() => setSelectedTask(task)}
                            />
                        ))}
                    </div>
                </div>

                {/* Select Month */}
                <div className='mb-10 sm:mb-14'>
                    <h3 className='text-white text-[15px] font-medium mb-3.5'>Select Month</h3>
                    <div className='flex gap-3 sm:gap-5'>
                        {monthOptions.map((month) => (
                            <SelectionButton
                                key={month}
                                option={month}
                                selected={selectedMonth === month}
                                onClick={() => setSelectedMonth(month)}
                            />
                        ))}
                    </div>
                </div>

                <div className='flex items-start sm:items-center justify-between sm:flex-row flex-col gap-4'>
                    <div className='flex items-center justify-between gap-5'>
                        <span className='text-[#515A69] text-[15px] font-medium'>Total Amount</span>
                        <span className='text-white text-[15px] font-medium'>${getPriceForSelection()}.00</span>
                    </div>

                    <Button
                        className='w-full rounded-md text-[14px] bg-[#5A66E8] rounded-md font-semibold sm:max-w-[262px] h-[38px]'
                        onClick={async () => {
                            setIsLoading(true)
                            // Simulate API call
                            setTimeout(() => {
                                console.log('Purchase:', { selectedTask, selectedMonth, price: getPriceForSelection() })
                                setIsLoading(false)
                                onClose()
                            }, 1500)
                        }}
                        loading={isLoading}
                        loadingText="Processing..."
                        disabled={isLoading}
                    >
                        Purchase Add-on
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PurchaseAddOns