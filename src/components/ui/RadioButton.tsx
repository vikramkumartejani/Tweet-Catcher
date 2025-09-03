'use client'

import React from 'react'

interface RadioButtonProps {
    id: string
    name: string
    value: string
    checked: boolean
    onChange: () => void
    className?: string
}

const RadioButton: React.FC<RadioButtonProps> = ({
    id,
    name,
    value,
    checked,
    onChange,
    className = ""
}) => {
    return (
        <div className={`relative ${className}`}>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="sr-only"
            />
                         <div
                 onClick={onChange}
                 className={`w-[18px] h-[18px] rounded-full border cursor-pointer transition-all duration-200 ${
                     checked
                         ? 'border-[#535EE1] bg-[#535EE1]'
                         : 'border-[#515A6980] bg-[#12141B] hover:border-[#515A6980]'
                 }`}
                 style={{
                     borderWidth: '1px',
                     borderColor: checked ? '#535EE1' : 'rgba(81, 90, 105, 0.5)'
                 }}
             >
                 {checked && (
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-white rounded-full" />
                 )}
             </div>
        </div>
    )
}

export default RadioButton
