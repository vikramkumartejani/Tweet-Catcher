'use client'

import React, { useState, useEffect, useRef } from 'react'

interface DropdownOption {
    value: string
    label: string
}

interface DropdownProps {
    options: DropdownOption[]
    value: string
    onChange: (value: string) => void
    placeholder?: string
    label?: string
    showLabel?: boolean
    className?: string
    buttonClassName?: string
    dropdownClassName?: string
    disabled?: boolean
}

const Dropdown: React.FC<DropdownProps> = ({
    options,
    value,
    onChange,
    placeholder = "Select an option",
    label,
    showLabel = false,
    className = "",
    buttonClassName = "",
    dropdownClassName = "",
    disabled = false
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    const selectedOption = options.find(option => option.value === value)
    const displayValue = showLabel && !selectedOption ? (label || placeholder) : (selectedOption ? selectedOption.label : placeholder)

    const handleOptionClick = (optionValue: string) => {
        onChange(optionValue)
        setIsOpen(false)
    }

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    if (!disabled) {
                        setIsOpen(!isOpen)
                    }
                }}
                disabled={disabled}
                className={`
                    w-full text-left bg-[#191C27] text-white px-[28px] h-[33px] rounded-md text-[14px] font-medium flex items-center justify-between gap-2.5 hover:bg-[#1A1D2A] transition-colors
                    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    ${buttonClassName}
                `}
            >
                <span className={showLabel && !selectedOption ? 'text-[#515A69]' : (selectedOption ? 'text-white' : 'text-[#515A69]')}>
                    {displayValue}
                </span>
                <svg className={`transition-transform ${isOpen ? 'rotate-180' : ''} ${disabled ? 'opacity-50' : ''}`} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9937 5.30625L6.93123 9.36875C6.87462 9.42556 6.80735 9.47064 6.73328 9.50139C6.65921 9.53215 6.57979 9.54798 6.49959 9.54798C6.41939 9.54798 6.33998 9.53215 6.26591 9.50139C6.19183 9.47064 6.12456 9.42556 6.06795 9.36875L2.00545 5.30625C1.89097 5.19177 1.82666 5.03651 1.82666 4.87461C1.82666 4.71272 1.89097 4.55745 2.00545 4.44297C2.11993 4.32849 2.2752 4.26418 2.43709 4.26418C2.59899 4.26418 2.75425 4.32849 2.86873 4.44297L6.5001 8.07434L10.1315 4.44246C10.2459 4.32799 10.4012 4.26367 10.5631 4.26367C10.725 4.26367 10.8803 4.32799 10.9947 4.44246C11.1092 4.55694 11.1735 4.71221 11.1735 4.8741C11.1735 5.036 11.1092 5.19127 10.9947 5.30574L10.9937 5.30625Z" fill="white" />
                </svg>
            </button>

            {isOpen && !disabled && (
                <div className={`absolute top-full left-0 mt-1 bg-[#13151E] border border-[#3B3D5533] rounded-md shadow-lg z-50 min-w-[140px] ${dropdownClassName}`}>
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={(e) => {
                                e.stopPropagation()
                                handleOptionClick(option.value)
                            }}
                            className={`
                                w-full text-left px-3 py-2 text-[13px] hover:bg-[#1A1D2A] transition-colors first:rounded-t-md last:rounded-b-md
                                ${value === option.value ? 'bg-[#1A1D2A] text-[#535EE1]' : 'text-white'}
                            `}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown
